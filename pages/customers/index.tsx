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

export type Customer = {
	_id: ObjectId;
	name: string;
	industry: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
	// const mongoClient = new MongoClient(
	// 	'mongodb+srv://skg:DrNYeqTpSWh2NXBR@customers.orsinft.mongodb.net/Customers?retryWrites=true&w=majority'
	// );

	const mongoClient = await clientPromise;

	const data = await mongoClient.db().collection('customers').find().toArray();

	// console.log('!!!!', data);

	/* const result = await axios.get<{
		customers: Customer[];
	}>('http://127.0.0.1:8000/api/customers/');
	console.log('result....', result.data.customers);
 */
	return {
		props: {
			customers: JSON.parse(JSON.stringify(data)),
		},
		revalidate: 60,
	};
};

const Customers: NextPage = ({
	customers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	// console.log(customers);

	return (
		<>
			<h1>Here are the customers: </h1>
			{customers.map((customer: Customer) => {
				return (
					<div key={customer._id.toString()}>
						<p>
							{customer._id.toString()} - {customer.name} ------{' '}
							{customer.industry}
						</p>
					</div>
				);
			})}
		</>
	);
};

export default Customers;
