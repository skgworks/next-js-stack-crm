import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
	orders?: Order[];
};

export type Order = {
	description: string;
	// price: number;
	_id: ObjectId;
	price: { $numberDecimal: string };
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
	// console.log(customers);
	// console.log(c);
	return (
		<Container>
			<Grid
				// maxWidth='lg'
				sx={{ mt: 1 }}
				container
				spacing={5}>
				{customers.map((customer: Customer) => {
					return (
						<CustomerComponent
							key={customer._id?.toString()}
							customer={customer}
						/>
					);
				})}
			</Grid>
		</Container>
	);
};

export default Customers;
