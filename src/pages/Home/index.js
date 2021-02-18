import React, { useEffect, useState } from 'react';
import Form from '../../Components/Form';
import Recipes from './Recipes';
import axios from 'axios';
import '../../scss/Pages/Home/index.scss';
import { toast, ToastContainer } from 'react-toastify';

export default function App() {
	const [recipes, setRecipies] = useState(null);
	const [ingredient, setIngredient] = useState('');
	const [temp, setTemp] = useState('');

	useEffect(() => {
		axios
			.get('/api')
			.then(res => {
				console.log('res', res.data);
				if (res.data.success) {
					setRecipies(res.data.data);
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
				// if error empty previous recipe no recipe should be found
				setRecipies([]);
			});
	}, []);

	const handleOnchange = e => setIngredient(e.target.value); //event listener. when search for ingredient handles that ingredient name for searching

	const getRecipe = e => {
		e.preventDefault();
		axios
			.get('api/search', {
				params: {
					ingredient: ingredient
				}
			})
			.then(res => {
				console.log('res', res.data.data);
				setRecipies([]);
				setRecipies(res.data.data);
				setTemp(Date.now()); //detects rerender if recipe got changed
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
				setRecipies([]);
			});
	};

	const handleDeleteRecipe = recipe => {
		setRecipies(previousData => {
			let preData = previousData.filter(item => item._id !== recipe._id);
			return preData;
			// delete specific recipe array
		});
	};

	return (
		<div className="RecipeSearch">
			{/* //passing props from here */}
			<Form
				getRecipe={getRecipe}
				handleOnchange={handleOnchange}
				ingredient={ingredient}
			/>
			<Recipes
				recipes={recipes}
				handleDeleteRecipe={handleDeleteRecipe}
				temp={temp}
			/>
		</div>
	);
}
