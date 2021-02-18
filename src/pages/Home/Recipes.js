import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// The useHistory hook gives you access to the history instance that you may use to navigate.
import Button from '../../Components/Buttons';
import Dialog from '@material-ui/core/Dialog';
// Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision.
import DialogActions from '@material-ui/core/DialogActions';
// DialogActions if `true`, the actions do not have additional margin.
import DialogTitle from '@material-ui/core/DialogTitle'; //Boolean false
import '../../scss/Pages/Home/Recipes.scss';
import axios from 'axios';
import { toast } from 'react-toastify';

//recipe.js is all the recipes on the home page index.js main file
const Recipes = ({ recipes, handleDeleteRecipe, temp }) => {
	const history = useHistory(); //from react router
	const [open, setOpen] = React.useState(false); //dialogue is false. when delete changes state
	const [toDeleteID, setToDeleteID] = useState('');

	const handleRecipeButton = recipe => {
		history.push(`/recipe/${recipe._id}`); //view recipe routes application to new url
	};

	const handleClickOpen = recipe => {
		setToDeleteID(recipe); //setToDeleteID is a hook
		setOpen(true); //setOpen is a hook
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
						You sure you want to delete this {toDeleteID.title} recipe?
					</DialogTitle>
					<DialogActions>
						<Button onClick={handleOpen} title="Disagree" />
						<Button onClick={() => handleOpen(toDeleteID)} title="Agree" />
					</DialogActions>
				</Dialog>
			</div>
			<div className="row">
				{/* if recieved recipes from api*/}
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
