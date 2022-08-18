import './iteam.css';
import { useOrder } from '../../hook/useOrder';

export const Iteam = (props) => {
	const { id, bowls, image, name, price } = props.data;
	const { data } = props;
	const { order, setorder } = useOrder();

	const handeIteam = () => {
		const index = order.findIndex((elemnt) => +elemnt.data.id === +id);

		if (index >= 0) {
			order[index].count += 1;
			setorder([...order]);
		} else {
			setorder([...order, { data, count: 1 }]);
		}
	};

	return (
		<div onClick={() => handeIteam()} className='card'>
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
