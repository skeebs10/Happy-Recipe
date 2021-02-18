import React, { useState, useEffect } from 'react';
import '../../scss/Pages/CreateRecipe/index.scss';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import CreatUpdateRecipe from '../../Components/createUpdateRecipe';

const CreateRecipe = () => {
	const [data, setData] = useState({
		title: '',
		description: '',
		image_url: '',
		publisher: '',
		ingredients: []
	});
	const [ingredientName, setIngredientName] = useState(null);

	const handleChange = e => {
		if (e.target.name === 'ingredients')
			return setIngredientName(e.target.value);
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleAddIngredient = () => {
		setData({ ...data, ingredients: [...data.ingredients, ingredientName] });
		setIngredientName('');
	};

	const handleSubmit = e => {
		e.preventDefault();
		axios
			.post('/api/', data)
			.then(({ data }) => {
				if (data.success) {
					setData({
						title: '',
						description: '',
						image_url: '',
						publisher: '',
						ingredients: []
					});
					toast.success(data.message);
				}
			})
			.catch(err => {
				console.log('err', err.response.data);
				let error = err?.response?.data;
				error = !!error.error.message
					? error.error.message
					: !!error.message
					? error.message
					: '';
				toast.error(`Something went wrong ${error}`);
			});
	};

	return (
		<div className="Create-Recipe">
			<h1 className="Create-Recipe__title"> Create Recipe </h1>

			<CreatUpdateRecipe
				handleSubmit={handleSubmit}
				data={data}
				handleChange={handleChange}
				handleAddIngredient={handleAddIngredient}
				ingredientName={ingredientName}
				///passed props in creatUpdateRecipes.js from here
			/>
		</div>
	);
};

export default CreateRecipe;
