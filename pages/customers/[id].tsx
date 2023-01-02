import axios from 'axios';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { Customer } from '.';

type Props = {
	customer: Customer;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const result = await axios.get(`http://127.0.0.1:8000/api/customers/`);
	console.log('result from paths....', result);

	const paths = result.data.customers.map((customer: Customer) => ({
		params: { id: customer.id.toString() },
	}));

	return {
		paths: paths,
		fallback: false,
	};
};

interface Params extends ParsedUrlQuery {
	id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
	context
) => {
	const params = context.params!;

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
};

const Customer: NextPage<Props> = (props) => {
	return <h1>Customer {props.customer.name}</h1>;
};

export default Customer;
