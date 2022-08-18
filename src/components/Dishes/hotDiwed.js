import axios from 'axios';
import { useEffect, useState } from 'react';
import { Add } from '../add/Add';
import { SettingIteam } from '../settingIteam/SettingIteam';

const SettingHotDished = () => {
	const [HotDished, setHodDished] = useState([]);

	useEffect(() => {
		axios
			.get('https://food-service-layer-app.herokuapp.com/food/1')
			.then((res) => setHodDished(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<div className='list'>
				<Add />
				{HotDished.length ? (
					HotDished?.map((el) => <SettingIteam data={el} />)
				) : (
					<h2>lodaing</h2>
				)}
			</div>
		</div>
	);
};

export default SettingHotDished;
