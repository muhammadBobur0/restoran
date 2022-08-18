import './settinglist.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Serdsa } from '../../assets/images/serdsa.svg';
import { ReactComponent as Restaurant } from '../../assets/images/Restaurant.svg';
import { ReactComponent as One } from '../../assets/images/one.svg';
import { ReactComponent as Sms } from '../../assets/images/sms.svg';
import { ReactComponent as Sect } from '../../assets/images/sect.svg';
import { ReactComponent as About } from '../../assets/images/about.svg';
const List = () => {
	return (
		<div className='seting-list'>
			<ul className='settings-list'>
				<li className='list-iteam'>
					<NavLink className={'list-tittle list-link'} to={'Appereance'}>
						<Serdsa className='setting-svg' />
						<div className='box-img'>
							<h3 className='list-tittle'>Appereance</h3>
							<p>Dark and Light mode, Font size</p>
						</div>
					</NavLink>
				</li>
				<li className='list-iteam'>
					<NavLink className={'list-tittle list-link'} to={'Restaurant'}>
						<Restaurant className='setting-svg' />
						<div className='box-img'>
							<h3 className='list-tittle'>Your Restaurant</h3>
							<p>Dark and Light mode, Font size</p>
						</div>
					</NavLink>
				</li>

				<li className='list-iteam'>
					<NavLink className={'list-tittle list-link'} to={'Products/'}>
						<One className='setting-svg' />
						<div className='box-img'>
							<h3 className='list-tittle'>Products Management</h3>
							<p>Manage your product, pricing</p>
						</div>
					</NavLink>
				</li>

				<li className='list-iteam'>
					<NavLink className={'list-tittle list-link'} to={'Notifications'}>
						<Sms className='setting-svg' />
						<div className='box-img'>
							<h3 className='list-tittle'>Notifications</h3>
							<p>Dark and Light mode, Font size</p>
						</div>
					</NavLink>
				</li>
				<li className='list-iteam'>
					<NavLink className={'list-tittle list-link'} to={'Security'}>
						<Sect className='setting-svg' />
						<div className='box-img'>
							<h3 className='list-tittle'>Security</h3>
							<p>Dark and Light mode, Font size</p>
						</div>
					</NavLink>
				</li>
				<li className='list-iteam'>
					<NavLink className={'list-tittle list-link'} to={'Security2'}>
						<Sect className='setting-svg' />
						<div className='box-img'>
							<h3 className='list-tittle'>Security</h3>
							<p>Dark and Light mode, Font size</p>
						</div>
					</NavLink>
				</li>
				<li className='list-iteam'>
					<NavLink className={'list-tittle list-link'} to={'About'}>
						<About className='setting-svg' />
						<div className='box-img'>
							<h3 className='list-tittle'>About Us</h3>
							<p>Dark and Light mode, Font size</p>
						</div>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default List;
