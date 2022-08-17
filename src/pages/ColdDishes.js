import axios from 'axios';
import { useEffect, useState } from 'react';
import { Iteam } from '../components/iteam/Iteam';

const ColdDished = () => {
	const [HotDished, setHodDished] = useState([]);

	useEffect(() => {
		axios
			.get('https://food-service-layer-app.herokuapp.com/food/2')
			.then((res) => setHodDished(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<div className='list'>
				{HotDished.length ? (
					HotDished?.map((el) => <Iteam key={el.id} data={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</div>
		</div>
	);
};

export default ColdDished;
