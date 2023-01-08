import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import { getCustomers } from '../api/customers';
import { Customer, Order } from '../customers';
import { useRouter } from 'next/router';
import { ObjectId } from 'mongodb';

interface OrderRow extends Order {
	orderPrice: Number;
	customerName: string;
	customerId?: ObjectId;
	id: ObjectId;
}

type Props = {
	orders: Order[];
};

const columns: GridColDef[] = [
	{ field: 'customerId', headerName: 'Customer ID#', width: 120 },
	{
		field: 'customerName',
		headerName: 'Customer',
		width: 150,
		editable: true,
	},
	{ field: 'id', headerName: 'Order ID#', width: 120 },
	{
		field: 'description',
		headerName: 'Description',
		width: 300,
		editable: true,
	},
	{
		field: 'orderPrice',
		headerName: 'Price',
		type: 'number',
		width: 110,
		editable: true,
		sortable: true,
	},
	// {
	// 	field: 'fullName',
	// 	headerName: 'Full name',
	// 	description: 'This column has a value getter and is not sortable.',
	// 	sortable: false,
	// 	width: 160,
	// 	valueGetter: (params: GridValueGetterParams) =>
	// 		`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	// },
];

export const getStaticProps: GetStaticProps<Props> = async () => {
	const data = await getCustomers();
	let orders: OrderRow[] = []; //Order[] = [];
	data.forEach((customer: Customer) => {
		if (customer.orders) {
			customer.orders.forEach((order: Order) => {
				console.log(order);
				orders.push({
					...order,
					customerName: customer.name,
					customerId: customer._id,
					id: order._id,
					orderPrice: Number(order.price.$numberDecimal),
				});
			});
		}
	});
	return {
		props: {
			orders: orders,
			// .map((customer: Customer) => {
			// 	return customer.orders || null;
			// })
			// .flat(1)
			// .filter((order: Order) => {
			// 	return order !== null;
			// }),
		},
		revalidate: 60,
	};
};

const Orders: NextPage<Props> = (props) => {
	const { customerId } = useRouter().query;
	// console.log(props);
	return (
		<Container>
			<Box sx={{ height: 400, width: '100%' }}>
				<DataGrid
					filterModel={{
						items: [
							{
								columnField: 'customerId',
								operatorValue: 'equals',
								value: customerId,
							},
						],
					}}
					rows={props.orders}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection
					disableSelectionOnClick
					experimentalFeatures={{ newEditingApi: true }}
					initialState={{
						filter: {
							filterModel: {
								items: [
									{
										columnField: 'customerId',
										operatorValue: 'equals',
										value: customerId,
									},
								],
							},
						},
					}}
				/>
			</Box>
		</Container>
	);
};

export default Orders;
