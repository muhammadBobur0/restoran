import axios from 'axios';
import { useEffect, useState } from 'react';
import { Add } from '../add/Add';
import { SettingIteam } from '../settingIteam/SettingIteam';

const SettingAppetizer = () => {
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
				<Add />
				{Appetizer.length ? (
					Appetizer?.map((el) => <SettingIteam data={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</div>
		</div>
	);
};

export default SettingAppetizer;
