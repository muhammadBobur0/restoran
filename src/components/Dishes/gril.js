import axios from 'axios';
import { useEffect, useState } from 'react';
import { Add } from '../add/Add';
import { SettingIteam } from '../settingIteam/SettingIteam';

const SettingGrill = () => {
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
				<Add />
				{Grill.length ? (
					Grill?.map((el) => <SettingIteam data={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</div>
		</div>
	);
};

export default SettingGrill;
