import List from '../../components/settingList/settingList';
import './setting.css';
import { Routes, Route } from 'react-router-dom';
import { Product } from '../../components/product/Product';

export const Setting = () => {
	return (
		<div className='setting'>
			<h2 className='setting-tittle'>Settings</h2>
			<div className='setings-box'>
				<List />
				<div className='items'>
					<Routes>
						<Route
							path='Appereance'
							element={
								<>
									<h2>Appereance</h2>
								</>
							}
						/>
						<Route
							path='Restaurant'
							element={
								<>
									<h2>Restaurant</h2>
								</>
							}
						/>
						<Route
							// index
							path='Products/*'
							element={<Product />}
						/>
						<Route
							path='Notifications'
							element={
								<>
									<h2>Notifications</h2>
								</>
							}
						/>
						<Route
							path='Security'
							element={
								<>
									<h2>Security</h2>
								</>
							}
						/>
						<Route
							path='Security2'
							element={
								<>
									<h2>Security</h2>
								</>
							}
						/>
						<Route
							path='About'
							element={
								<>
									<h2>About</h2>
								</>
							}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
};
