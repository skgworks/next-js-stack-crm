import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MongoClient, ObjectId } from 'mongodb';
import {
	GetStaticProps,
	GetStaticPaths,
	GetServerSideProps,
	NextPage,
	InferGetStaticPropsType,
} from 'next';
import CustomerComponent from '../../components/Customer';
import clientPromise from '../../lib/mongodb';
import { getCustomers } from '../api/customers';

export type Customer = {
	_id?: ObjectId;
	name: string;
	industry: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
	const data = await getCustomers();

	console.log('!!!!', data);

	/* const result = await axios.get<{
		customers: Customer[];
	}>('http://127.0.0.1:8000/api/customers/');
	console.log('result....', result.data.customers);
 */
	return {
		props: {
			customers: data,
		},
		revalidate: 60,
	};
};

const Customers: NextPage = ({
	customers: c,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { data: { data: { customers = c } = {} } = {} } = useQuery(
		['customers'],
		() => {
			return axios('/api/customers') as any;
		}
	);
	console.log(customers);
	console.log(c);
	return (
		<>
			<h1>Here are the customers: </h1>
			{customers.map((customer: Customer) => {
				return <CustomerComponent customer={customer} />;
			})}
		</>
	);
};

export default Customers;
