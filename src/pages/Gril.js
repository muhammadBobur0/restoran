import axios from 'axios';
import { useEffect, useState } from 'react';
import { Iteam } from '../components/iteam/Iteam';

const Grill = () => {
	const [Grill, setGrill] = useState([]);

	useEffect(() => {
		axios
			.get('https://food-service-layer-app.herokuapp.com/food/4')
			.then((res) => setGrill(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<div className='list'>
				{Grill.length ? (
					Grill?.map((el) => <Iteam key={el.id} data={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</div>
		</div>
	);
};

export default Grill;
