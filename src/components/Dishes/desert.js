import axios from 'axios';
import { useEffect, useState } from 'react';
import { Add } from '../add/Add';
import { SettingIteam } from '../settingIteam/SettingIteam';

const SettingDesert = () => {
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
				<Add />
				{Desert.length ? (
					Desert?.map((el) => <SettingIteam data={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</div>
		</div>
	);
};

export default SettingDesert;
