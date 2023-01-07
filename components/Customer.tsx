import Button from '@mui/material/Button';
import Info from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import { Customer } from '../pages/customers';

type props = {
	customer: Customer;
};

const Customer = ({ customer }: props) => {
	return (
		<div
			key={customer._id?.toString()}
			style={{
				marginBottom: 10,
				padding: 10,
			}}>
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
			<Button variant='contained'>View Orders</Button>
			{/* <Info /> */}
		</div>
	);
};

export default Customer;
