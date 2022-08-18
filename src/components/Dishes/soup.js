import axios from 'axios';
import { useEffect, useState } from 'react';
import { Add } from '../add/Add';
import { SettingIteam } from '../settingIteam/SettingIteam';

const SettingSoup = () => {
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
				<Add />
				{Soup.length ? (
					Soup?.map((el) => <SettingIteam data={el} />)
				) : (
					<h2>lodaing...</h2>
				)}
			</div>
		</div>
	);
};

export default SettingSoup;
