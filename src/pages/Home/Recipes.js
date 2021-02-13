import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Buttons';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const Recipes = ({ recipes }) => {
	const history = useHistory();
	const [open, setOpen] = React.useState(false);

	const handleRecipeButton = recipe => {
		history.push(`/recipe/${recipe._id}`);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="container">
			<div>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						Are you Sure you want to delete this recipe?
					</DialogTitle>
					<DialogActions>
						<Button onClick={handleClose} title="Disagree" />
						<Button onClick={handleClose} title="Agree" />
					</DialogActions>
				</Dialog>
			</div>
			<div className="row">
				{recipes.map(recipe => {
					return (
						<div
							key={recipe.title}
							className="col-md-4"
							style={{ marginBottom: '2rem' }}
						>
							<div className="Recipes__box">
								<img
									className="recipe__box-img"
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
								<div>
									<Button
										onClick={() => handleRecipeButton(recipe)}
										title={'View Recipe'}
									/>
									<Button title={'Delete'} onClick={handleClickOpen} />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Recipes;
