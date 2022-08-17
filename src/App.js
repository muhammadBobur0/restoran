import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Center } from './components/center/Center';
import { Navbar } from './components/navbar/Navbar';

function App() {
	return (
		<div className='content'>
			<Navbar />
			<Routes>
				<Route path='/*' element={<Center />} />
			</Routes>
		</div>
	);
}

export default App;
