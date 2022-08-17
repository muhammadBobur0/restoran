import axios from 'axios';
import { useEffect, useState } from 'react';
import { Iteam } from '../components/iteam/Iteam';

const Appetizer = () => {
	const [Appetizer, setAppetizer] = useState([]);

	useEffect(() => {
		axios
			.get('https://food-service-layer-app.herokuapp.com/food/5')
			.then((res) => setAppetizer(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<div className='list'>
				{Appetizer.length ? (
					Appetizer?.map((el) => <Iteam key={el.id} data={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</div>
		</div>
	);
};

export default Appetizer;
