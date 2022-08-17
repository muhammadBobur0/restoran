import './Iteam-order.css';

export const Iteamorder = ({ data }) => {
	let { image, name, price } = data.data;
	return (
		<div className='iteam-boxs'>
			<div>
				<div className='Iteam-order'>
					<img
						className='order-img'
						src={'https://food-service-layer-app.herokuapp.com/' + image}
						width={45}
						height={41}
						alt={name}
					/>
					<div className='flex'>
						<h3 className='order-itam-text'>{name}</h3>
						<p className='order-itam-price'>${price}</p>
					</div>
					<div className='count-box'>
						<span className='caount'>{data.count}</span>
						<span>${price * data.count}</span>
					</div>
				</div>
			</div>
			<div className='order-boxs-form'>
				<input
					placeholder='Please, just a little bit spicy only.'
					className='oreder-input'
					type='text'
				/>
				<button className='delete'></button>
			</div>
		</div>
	);
};
