import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Center } from './components/center/Center';
import { Navbar } from './components/navbar/Navbar';
import { Order as OrderComponents } from './components/order/Order';
import { OrderProvider } from './context/order';

function App() {
	return (
		<div className='content'>
			<Navbar />
			<OrderProvider>
				<Routes>
					<Route path='/*' element={<Center />} />
				</Routes>
				<OrderComponents />
			</OrderProvider>
		</div>
	);
}

export default App;
