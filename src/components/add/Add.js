import { useRef, useState } from 'react';
import axios from 'axios';

export const Add = () => {
	const [modal, setModal] = useState(false);
	const editname = useRef();
	const editprice = useRef();
	const editcatogory = useRef();
	const editbowls = useRef();
	const editimg = useRef();

	const handleOnclick = (evt) => {
		evt.preventDefault();
		const formData = new FormData();

		formData.append('name', editname.current.value);
		formData.append('price', editprice.current.value);
		formData.append('bowls', editbowls.current.value);
		formData.append('category_id', editcatogory.current.value);
		formData.append('food_img', editimg.current.files[0]);

		axios
			.post('https://food-service-layer-app.herokuapp.com/food', formData)
			.then((res) => {
				if (res.data) {
					window.location.reload(false);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div
				onClick={() => {
					setModal(true);
				}}
				className='push'>
				<p>+</p>
				<p>Add new dish</p>
			</div>
			{modal ? (
				<div className='modal'>
					<h3 className='modal-text'>add new food</h3>
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
						<input ref={editname} placeholder='name' type='text' />
						<input ref={editprice} placeholder='price' type='text' />
						<input ref={editbowls} placeholder='bowls' type='number' />
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
		</>
	);
};
