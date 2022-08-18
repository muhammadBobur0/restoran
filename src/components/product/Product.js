import './product.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import SettingHotDished from '../Dishes/hotDiwed';
import SettingColdDished from '../Dishes/coldDishes';
import SettingSoup from '../Dishes/soup';
import SettingGrill from '../Dishes/gril';
import SettingAppetizer from '../Dishes/appetizer';
import SettingDesert from '../Dishes/desert';

export const Product = () => {
	return (
		<div>
			<div className='flex-boxs'>
				<h2>Products Management</h2>
				<button className='product-buton'>Manage Categories</button>
			</div>
			<div class='typesfood'>
				<NavLink aria-current='page' className='Hot' to='Products/*'>
					Hot Dishes
				</NavLink>
				<NavLink className='Hot' to='ColdDishes'>
					Cold Dishes
				</NavLink>
				<NavLink className='Hot' to='Soup'>
					Soup
				</NavLink>
				<NavLink className='Hot' to='Grill'>
					Grill
				</NavLink>
				<NavLink className='Hot' to='Appetizer'>
					Appetizer
				</NavLink>
				<NavLink className='Hot' to='Dessert'>
					Dessert
				</NavLink>
			</div>
			<div className='product'>
				<Routes>
					<Route index element={<SettingHotDished />} />
					<Route path='ColdDishes' element={<SettingColdDished />} />
					<Route path='Soup' element={<SettingSoup />} />
					<Route path='Grill' element={<SettingGrill />} />
					<Route path='Appetizer' element={<SettingAppetizer />} />
					<Route path='Dessert' element={<SettingDesert />} />
				</Routes>
			</div>

			<div className='btn-box'>
				<button className={'Discard'}>Discard Changes</button>
				<button className={'Save'}>Save Changes</button>
			</div>
		</div>
	);
};
