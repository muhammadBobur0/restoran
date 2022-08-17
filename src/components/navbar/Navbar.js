import { NavLink, Link } from 'react-router-dom';
import './navbar.css';
import Logo from '../../assets/images/Logo.svg';
import { ReactComponent as Home } from '../../assets/images/Home.svg';
import { ReactComponent as One } from '../../assets/images/one.svg';
import { ReactComponent as Vector } from '../../assets/images/Vector.svg';
import { ReactComponent as Mesage } from '../../assets/images/mesage.svg';
import { ReactComponent as SMS } from '../../assets/images/sms.svg';
import { ReactComponent as Seting } from '../../assets/images/setting.svg';
import { ReactComponent as Logaout } from '../../assets/images/logout.svg';

export const Navbar = () => {
	return (
		<div>
			<div className='sidebar'>
				<Link className='header-link Logo-header' to={'/'}>
					<span className='header-span'>
						<img
							src={Logo}
							width='56'
							className='logo'
							height={56}
							alt='logo-site'
						/>
					</span>
				</Link>
				<NavLink className={'header-link'} to={'/'}>
					<span className='header-span'>
						<Home className='svg' width={20} height={20} />
					</span>
				</NavLink>

				<NavLink className={'header-link'} to={'/one'}>
					<span className='header-span'>
						<One className='svg' width={20} height={20} />
					</span>
				</NavLink>

				<NavLink className={'header-link'} to={'/order'}>
					<span className='header-span'>
						<Vector className='svg' width={20} height={20} />
					</span>
				</NavLink>

				<NavLink className={'header-link'} to={'/Mesage'}>
					<span className='header-span'>
						<Mesage className='svg' width={20} height={20} />
					</span>
				</NavLink>

				<NavLink className={'header-link'} to={'/SMS'}>
					<span className='header-span'>
						<SMS className='svg' width={20} height={20} />
					</span>
				</NavLink>

				<NavLink className={'header-link setting'} to={'/Seting'}>
					<span className='header-span'>
						<Seting className='svg' width={20} height={20} />
					</span>
				</NavLink>

				<button className={'header-link'} to={'/Logaout'}>
					<span className='header-span'>
						<Logaout className='svg' width={20} height={20} />
					</span>
				</button>
			</div>
		</div>
	);
};
