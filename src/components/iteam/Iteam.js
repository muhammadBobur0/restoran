import './iteam.css';
import { useOrder } from '../../hook/useOrder';
// import { useState } from 'react';

export const Iteam = (props) => {
	const { bowls, image, name, price } = props.data;
	const { data } = props;
	const { order, setorder } = useOrder();

	// const [click, setClick] = useState([]);

	// const handeIteam = () => {
	// 	const finded = click.findIndex((elemnt) => +elemnt.data.id === +id);

	// 	if (finded === -1) {
	// 		setClick([...click, { data, count: 1 }]);
	// 		console.log(click);
	// 	} else {
	// 		click[finded].count += 1
	// click[finded].price * 2
	// 	}
	// };

	return (
		<div
			onClick={() => setorder([...order, { data, count: 1 }])}
			className='card'>
			<img
				className='food-images'
				src={'https://food-service-layer-app.herokuapp.com/' + image}
				alt={name}
			/>
			<h3>{name}</h3>
			<p>$ {price}</p>
			<p>{bowls} Bowls available</p>
		</div>
	);
};
