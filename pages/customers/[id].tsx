import axios, { AxiosError } from 'axios';
import { ObjectId } from 'mongodb';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { Customer } from '.';
import clientPromise from '../../lib/mongodb';
import { BSONTypeError } from 'bson';

type Props = {
	customer?: Customer;
};

export const getStaticPaths: GetStaticPaths = async () => {
	/* 	const result = await axios.get(`http://127.0.0.1:8000/api/customers/`);
	console.log('result from paths....', result);

	const paths = result.data.customers.map((customer: Customer) => ({
		params: { id: customer.id.toString() },
	})); */

	return {
		paths: [],
		fallback: 'blocking',
	};
};

interface Params extends ParsedUrlQuery {
	id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
	context
) => {
	const params = context.params!;

	try {
		/* const result = await axios.get<{
			customer: Customer;
		}>(`http://127.0.0.1:8000/api/customers/${params.id}`);
		console.log('result from props....', result.data.customer); */

		const mongoClient = await clientPromise;

		const data = (await mongoClient
			.db()
			.collection('customers')
			.findOne({ _id: new ObjectId(params.id) })) as Customer;
		console.log('!!!!!!', data);

		if (!data) {
			return {
				notFound: true,
				revalidate: 60,
			};
		}

		return {
			props: {
				customer: JSON.parse(JSON.stringify(data)),
			},
			revalidate: 60,
		};
	} catch (error) {
		console.log(error);
		if (error instanceof BSONTypeError) {
			return {
				notFound: true,
			};
		}
		throw error;
	}
};

const Customer: NextPage<Props> = (props) => {
	const router = useRouter();
	if (router.isFallback) {
		return <p>Loading ..</p>;
	}
	return <h1> {props.customer ? 'Customer' + props.customer.name : null}</h1>;
};

export default Customer;
