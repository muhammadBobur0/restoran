import axios from 'axios';
import { useEffect, useState } from 'react';
import { Iteam } from '../components/iteam/Iteam';

const Desert = () => {
	const [Desert, setDesert] = useState([]);

	useEffect(() => {
		axios
			.get('https://food-service-layer-app.herokuapp.com/food/6')
			.then((res) => setDesert(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<div className='list'>
				{Desert.length ? (
					Desert?.map((el) => <Iteam key={el.id} data={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</div>
		</div>
	);
};

export default Desert;
