import axios from 'axios';
import { useEffect, useState } from 'react';
import { Iteam } from '../components/iteam/Iteam';

const Soup = () => {
	const [Soup, setSoup] = useState([]);

	useEffect(() => {
		axios
			.get('https://food-service-layer-app.herokuapp.com/food/3')
			.then((res) => setSoup(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<div className='list'>
				{Soup.length ? (
					Soup?.map((el) => <Iteam key={el.id} data={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</div>
		</div>
	);
};

export default Soup;
