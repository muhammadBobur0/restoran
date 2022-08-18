import { Route, Routes } from 'react-router-dom';
import { Center } from '../components/center/Center';
import { Order as OrderComponents } from '../components/order/Order';
import { OrderProvider } from '../context/order';

const Content = () => {
	return (
		<OrderProvider>
			<Routes>
				<Route path='/*' element={<Center />} />
			</Routes>
			<OrderComponents />
		</OrderProvider>
	);
};

export default Content;
