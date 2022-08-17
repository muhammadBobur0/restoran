import './iteam.css';

export const Iteam = (props) => {
	const { bowls, id, image, name, price } = props.data;
	return (
		<div className='card' id={id}>
			<img
				className='food-images'
				src={'https://food-service-layer-app.herokuapp.com/' + image}
				alt=''
			/>
			<h3>{name}</h3>
			<p>$ {price}</p>
			<p>{bowls} Bowls available</p>
		</div>
	);
};
