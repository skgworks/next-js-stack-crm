import axios from 'axios';
import {
	GetStaticProps,
	GetStaticPaths,
	GetServerSideProps,
	NextPage,
	InferGetStaticPropsType,
} from 'next';

export type Customer = {
	id: number;
	name: string;
	industry: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
	const result = await axios.get<{
		customers: Customer[];
	}>('http://127.0.0.1:8000/api/customers/');
	console.log('result....', result.data.customers);

	return {
		props: {
			customers: result.data.customers,
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
					<div key={customer.id}>
						<p>
							{customer.id} - {customer.name} ------ {customer.industry}
						</p>
					</div>
				);
			})}
		</>
	);
};

export default Customers;
