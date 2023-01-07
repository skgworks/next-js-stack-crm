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
	customers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const customersQuery = useQuery(
		['customers'],
		() => {
			return axios('/api/customers') as any;
		},
		{
			initialData: { data: { customers: customers } },
		}
	);
	console.log(customers);
	console.log(customersQuery);
	return (
		<>
			<h1>Here are the customers: </h1>
			{customersQuery.data.data.customers.map((customer: Customer) => {
				return (
					<div key={customer._id?.toString()}>
						<p>
							{customer._id?.toString()} - {customer.name} ------{' '}
							{customer.industry}
						</p>
					</div>
				);
			})}
		</>
	);
};

export default Customers;
