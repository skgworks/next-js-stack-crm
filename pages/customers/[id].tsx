import axios, { AxiosError } from 'axios';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { Customer } from '.';

type Props = {
	customer?: Customer;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const result = await axios.get(`http://127.0.0.1:8000/api/customers/`);
	console.log('result from paths....', result);

	const paths = result.data.customers.map((customer: Customer) => ({
		params: { id: customer.id.toString() },
	}));

	return {
		paths: paths,
		fallback: true,
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
		const result = await axios.get<{
			customer: Customer;
		}>(`http://127.0.0.1:8000/api/customers/${params.id}`);
		console.log('result from props....', result.data.customer);
		return {
			props: {
				customer: result.data.customer,
			},
			revalidate: 60,
		};
	} catch (error) {
		if (error instanceof AxiosError) {
			if (error.response?.status === 404) {
				return {
					notFound: true,
				};
			}
		}
		return { props: {} };
	}
};

const Customer: NextPage<Props> = (props) => {
	const router = useRouter();
	if (router.isFallback) {
		return <p>Loading ..</p>;
	}
	return <h1>Customer {props.customer ? props.customer.name : null}</h1>;
};

export default Customer;
