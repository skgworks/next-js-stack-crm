import {
	GetStaticProps,
	GetStaticPaths,
	GetServerSideProps,
	NextPage,
	InferGetStaticPropsType,
} from 'next';

type Customer = {
	id: number;
	name: string;
	industry: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {
			customers: [
				{
					id: 1,
					name: 'Swiggy',
					industry: 'Food',
				},
				{
					id: 2,
					name: 'Reliance',
					industry: 'Petroleum',
				},
			],
		},
	};
};

const Customers: NextPage = ({
	customers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(customers);
	return (
		<>
			<h1>Here are the customers: </h1>
			{customers.map((customer: Customer) => {
				return (
					<div key={customer.id}>
						<p>{customer.name}</p>
						<p>{customer.industry}</p>
					</div>
				);
			})}
		</>
	);
};

export default Customers;
