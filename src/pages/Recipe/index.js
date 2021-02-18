import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Buttons';
import '../../scss/Pages/Recipe/index.scss';
import CreatUpdateRecipe from '../../Components/createUpdateRecipe';
import Dialog from '@material-ui/core/Dialog';
import { toast } from 'react-toastify';

function RecipeDetail({ match }) {
	//match prop coming from react-router
	const [recipeDetails, setRecipeDetails] = useState(null); //most accurate but could be an string as well
	const [loading, setLoading] = useState(true);
	const [errMess, setErrMess] = useState(null);
	const [ingredientName, setIngredientName] = useState(null);
	const history = useHistory(); //react router
	const [open, setOpen] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		axios
			.get(`/api/id`, {
				params: {
					id: match?.params?.id
				}
			})
			.then(res => {
				if (res.data.success) {
					setRecipeDetails(res.data.data);
					setData(res.data.data);
					setErrMess('');
				} else {
					if (res.data.error) {
						setErrMess(res.data.error.message);
					}
				}
				setLoading(false);
			})
			.catch(err => {
				setLoading(false);
				console.log('err', err.response.data);
				let error = err?.response?.data;
				error = !!error.error.message
					? error.error.message
					: !!error.message
					? error.message
					: '';
				toast.error(`Something went wrong ${error}`);
				setErrMess(error);
			});
	}, []);

	const handleGoHome = () => {
		history.push('/'); //pushing back to home url
	};

	const handleOpen = () => {
		setOpen(!open); // invert previous state and this the modal that pops up
	};

	const handleChange = e => {
		if (e.target.name === 'ingredients')
			return setIngredientName(e.target.value);
		setData({ ...data, [e.target.name]: e.target.value }); //data from api
	};

	const handleAddIngredient = () => {
		setData({
			...data,
			ingredients: [...data.ingredients, ingredientName]
		});
		setIngredientName('');
	};
	const handleSubmit = e => {
		e.preventDefault();
		axios
			.put('/api/id', {
				id: match?.params?.id,
				...data
			})
			.then(res => {
				if (res.data.success) {
					toast.success('Recipe updated successfully');
					setRecipeDetails(data);
					handleOpen();
				} else toast.info(res.data.message);
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
		<div className="container Active-recipe">
			<Dialog
				open={open}
				maxWidth={'sm'}
				onClose={handleOpen}
				fullWidth
				className="Active-recipe__update-recipe-dialog"
			>
				<CreatUpdateRecipe
					data={data}
					handleChange={handleChange}
					update
					handleSubmit={handleSubmit}
					handleAddIngredient={handleAddIngredient}
				/>
			</Dialog>

			{!!recipeDetails && !loading ? (
				<div className="Active-recipe__main">
					<div>
						<img
							className="Active-recipe__img"
							src={recipeDetails.image_url}
							alt={recipeDetails.title}
						/>
					</div>
					<div>
						<h1 className="Active-recipe__title">{recipeDetails.title}</h1>
						<h5 className="Active-recipe__sub-heading">
							Publisher: <span>{recipeDetails.publisher}</span>
						</h5>
						<h5 className="Active-recipe__sub-heading">
							Description: <span>{recipeDetails.description}</span>
						</h5>
						<h5 className="Active-recipe__sub-heading">
							Ingredients:{' '}
							<span>
								{recipeDetails.ingredients.map(
									(ingredient, index) =>
										index > 0 ? `, ${ingredient}` : ingredient
									// if index is great zero display comma
								)}
							</span>
						</h5>
						<div>
							<Button
								title="Go Home"
								onClick={handleGoHome}
								className="Active-recipe__btn"
							/>
							<Button
								title="Update"
								onClick={handleOpen}
								className="Active-recipe__btn"
							/>
						</div>
					</div>
				</div>
			) : (
				!loading && errMess && <div>{errMess}</div>
			)}
		</div>
	);
}

export default RecipeDetail;
