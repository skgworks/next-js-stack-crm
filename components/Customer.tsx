import Button from '@mui/material/Button';
import Info from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import { Customer } from '../pages/customers';
import { Grid } from '@mui/material';
import Link from 'next/link';

type props = {
	customer: Customer;
};

const Customer = ({ customer }: props) => {
	return (
		<Grid item>
			<span
				style={{
					display: 'flex',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}>
				<Tooltip title={'ID # ' + customer._id?.toString()}>
					<PersonIcon
						fontSize='small'
						style={{ marginRight: 10 }}
					/>
				</Tooltip>
				{customer.name}
			</span>
			<p>{customer.industry}</p>
			<Link
				href={{
					pathname: '/orders',
					query: {
						customerId: customer._id?.toString(),
					},
				}}>
				<Button variant='contained'>View Orders</Button>
			</Link>
			{/* <Info /> */}
		</Grid>
	);
};

export default Customer;
