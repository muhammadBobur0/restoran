import './center.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import ColdDished from '../../pages/ColdDishes';
import HotDished from '../../pages/HotDiwed';
import Soup from '../../pages/Soup';
import Grill from '../../pages/Gril';
import Appetizer from '../../pages/Appetizer';
import Desert from '../../pages/Desert';

export const Center = () => {
	return (
		<div className='center-container'>
			<div>
				<div className='header'>
					<div>
						<h1 className='header-tile'>Jaegar Resto</h1>
						<p className='header-text'>Tuesday, 2 Feb 2021</p>
					</div>
					<div className='search'>
						<input
							className='input-search'
							placeholder='Search for food, coffe, etc..'
							type='text'
						/>
					</div>
				</div>
			</div>
			<div className='typesfood'>
				<NavLink className='dishes' to={'/'}>
					Hot Dishes
				</NavLink>

				<NavLink className='dishes' to={'ColdDishes'}>
					Cold Dishes
				</NavLink>

				<NavLink className='dishes' to={'Soup'}>
					Soup
				</NavLink>

				<NavLink className='dishes' to={'Grill'}>
					Grill
				</NavLink>

				<NavLink className='dishes' to={'Appetizer'}>
					Appetizer
				</NavLink>

				<NavLink className='dishes' to={'Dessert'}>
					Dessert
				</NavLink>
			</div>

			<div>
				<div className='choose'>
					<h2>Choose Dishes</h2>
					<select className='select'>
						<option>Dine In</option>
					</select>
				</div>
				<div>
					<Routes>
						<Route index element={<HotDished />} />
						<Route path='ColdDishes' element={<ColdDished />} />
						<Route path='Soup' element={<Soup />} />
						<Route path='Grill' element={<Grill />} />
						<Route path='Appetizer' element={<Appetizer />} />
						<Route path='Dessert' element={<Desert />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};
