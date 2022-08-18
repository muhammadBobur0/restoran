import { useEffect, useState } from 'react';
import './order.css';
import { useOrder } from '../../hook/useOrder';
import { Iteamorder } from '../iteamorder/Iteamorder';

export const Order = () => {
	const [active, setactive] = useState(1);
	const [prisetotal, setprisetotal] = useState(0);
	const { order } = useOrder();

	const total = () => {
		let total = 0;
		order?.forEach((element) => {
			total += Number(element.data.price) * Number(element.count);
		});
		setprisetotal(total);
	};

	useEffect(() => {
		total();
	}, [order]);

	return (
		<div className='order'>
			<div className='order-box'>
				<h2 className='order-text'>Orders #34562</h2>
				<div className='button-box'>
					<button
						className={active === 1 ? 'btn active' : 'btn'}
						onClick={() => {
							setactive(1);
						}}>
						Dine In
					</button>
					<button
						className={active === 2 ? 'btn active' : 'btn'}
						onClick={() => {
							setactive(2);
						}}>
						To Go
					</button>
					<button
						className={active === 3 ? 'btn active' : 'btn'}
						onClick={() => {
							setactive(3);
						}}>
						Delivery
					</button>
				</div>
				<div className='itm'>
					<p className='text'> Item</p>
					<p className='text qty'>Qty</p>
					<p className='text'>Price</p>
				</div>

				<div className='orders-box'>
					{order.length
						? order.map((e) => {
								return <Iteamorder key={e.id} data={e} />;
						  })
						: ''}
				</div>
				<div className='payment'>
					<div className='payment-dis'>
						<h3 className='payment-dis-text'>Discount</h3>
						<p className='payment-text'>$0</p>
					</div>
					<div className='payment-dis'>
						<h3 className='payment-dis-text'>Sub total</h3>
						<p className='payment-text'>${prisetotal}</p>
					</div>
					<div className='Continue'>
						<button className='Continue-btn'>Continue to Payment</button>
					</div>
				</div>
			</div>
		</div>
	);
};
