import { useRouter } from 'next/router';

export default function Customer() {
	const router = useRouter();
	const { customerId } = router.query;

	return (
		<div>
			<h1>Here is the customer# {customerId}: </h1>
		</div>
	);
}
