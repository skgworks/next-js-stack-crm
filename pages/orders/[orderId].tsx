import { useRouter } from 'next/router';

export default function Order() {
	const router = useRouter();
	const { orderId, customerId } = router.query;

	return (
		<div>
			<h1>
				Here is the Order# {orderId} for Customer# {customerId}:{' '}
			</h1>
		</div>
	);
}
