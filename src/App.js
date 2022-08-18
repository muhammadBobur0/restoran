import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { OrderProvider } from './context/order';
import Content from './pages/indexpage';
import { Setting } from './pages/setting/Setting';

function App() {
	return (
		<div className='content'>
			<Navbar />
			<OrderProvider>
				<Routes>
					<Route path='/*' element={<Content />} />
					<Route path='/Seting/*' element={<Setting />} />
				</Routes>
			</OrderProvider>
		</div>
	);
}

export default App;
