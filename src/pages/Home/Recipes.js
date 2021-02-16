import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Buttons';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../../scss/Pages/Home/Recipes.scss';
import axios from 'axios';
import { toast } from 'react-toastify';

const Recipes = ({ recipes, handleDeleteRecipe, temp }) => {
	const history = useHistory();
	const [open, setOpen] = React.useState(false);
	const [toDeleteID, setToDeleteID] = useState('');

	const handleRecipeButton = recipe => {
		history.push(`/recipe/${recipe._id}`);
	};

	const handleClickOpen = recipe => {
		setToDeleteID(recipe);
		setOpen(true);
	};

	const handleOpen = deleteRecipe => {
		if (deleteRecipe) {
			axios
				.delete('/api/id', {
					data: {
						id: toDeleteID._id
					}
				})
				.then(({ data }) => {
					console.log('data', data);
					if (data.success) {
						toast.success(data.message);
						handleDeleteRecipe(deleteRecipe);
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
		}

		setOpen(false);
	};

	return (
		<div className="container">
			<div>
				<Dialog
					open={open}
					onClose={handleOpen}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						Are you Sure you want to delete {toDeleteID.title} recipe?
					</DialogTitle>
					<DialogActions>
						<Button onClick={handleOpen} title="Disagree" />
						<Button onClick={() => handleOpen(toDeleteID)} title="Agree" />
					</DialogActions>
				</Dialog>
			</div>
			<div className="row">
				{!recipes ? (
					<div className="Recipes__no-recipe">loading</div>
				) : !!recipes?.length ? (
					recipes.map(recipe => {
						return (
							<div
								key={recipe.title}
								className="col-md-4"
								style={{ marginBottom: '2rem' }}
							>
								<div className="Recipes__box">
									<img
										className="Recipes__box-img"
										src={recipe.image_url}
										alt={recipe.title}
									/>
									<div className="Recipes__text">
										<h5 className="Recipes__title">
											{recipe.title.length < 20
												? `${recipe.title}`
												: `${recipe.title.substring(0, 25)}...`}
										</h5>
										<p className="Recipes__subtitle">
											Publisher: <span>{recipe.publisher}</span>
										</p>
									</div>
									<div className="Recipes__buttons">
										<Button
											onClick={() => handleRecipeButton(recipe)}
											title={'View Recipe'}
										/>
										<Button
											title={'Delete'}
											onClick={() => handleClickOpen(recipe)}
										/>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<div className="Recipes__no-recipe">No Recipe Found</div>
				)}
			</div>
		</div>
	);
};

export default Recipes;
