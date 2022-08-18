import { ReactComponent as Edit } from '../../assets/images/edit.svg';
import axios from 'axios';
import { useRef, useState } from 'react';

export const SettingIteam = (props) => {
	const { id, bowls, image, name, price } = props.data;
	const [modal, setModal] = useState(false);
	const editname = useRef();
	const editprice = useRef();
	const editcatogory = useRef();
	const editbowls = useRef();
	const editimg = useRef();

	const handleDelete = () => {
		axios
			.delete(`https://food-service-layer-app.herokuapp.com/food/${id}`)
			.then((res) => {
				if (res.data) {
					window.location.reload(false);
				}
			})
			.catch((err) => console.log(err));
	};

	const handleOnclick = (evt) => {
		evt.preventDefault();
		const formData = new FormData();

		formData.append('name', editname.current.value);
		formData.append('price', editprice.current.value);
		formData.append('bowls', editbowls.current.value);
		formData.append('category_id', editcatogory.current.value);
		formData.append('food_img', editimg.current.files[0]);

		axios
			.put(`https://food-service-layer-app.herokuapp.com/food/${id}`, formData)
			.then((res) => {
				if (res.data.message === 'ok') {
					window.location.reload(false);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='card border'>
			<img
				className='images'
				width='144'
				height='130'
				src={'https://food-service-layer-app.herokuapp.com/' + image}
				alt={name}
			/>
			<h3>{name}</h3>
			<p>$ {price}</p>
			<p>{bowls} Bowls available</p>
			<div className='width'>
				<button
					onClick={() => {
						setModal(true);
					}}
					className='edit'>
					<Edit className='edit-svg' />
					<span>Edit</span>
				</button>
				<button
					onClick={() => {
						handleDelete();
					}}
					className='delete'>
					Delete{' '}
				</button>
			</div>

			{modal ? (
				<div className='modal'>
					<div>
						<button
							onClick={() => {
								setModal(false);
							}}
							className='close'>
							&times;
						</button>
					</div>
					<form
						onSubmit={(evt) => {
							handleOnclick(evt);
						}}>
						<input ref={editname} defaultValue={name} type='text' />
						<input ref={editprice} defaultValue={price} type='text' />
						<input ref={editbowls} defaultValue={bowls} type='number' />
						<input ref={editcatogory} placeholder='Category_id' type='text' />
						<label className='file'>
							<input ref={editimg} className='hidden' type='file' />
							photo
						</label>
						<button className='submit' type='submit'>
							submit
						</button>
					</form>
				</div>
			) : (
				''
			)}
		</div>
	);
};
