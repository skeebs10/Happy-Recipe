import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../../scss/Pages/CreateRecipe/index.scss';
import Button from '../../Components/Buttons';

const CreateRecipe = () => {
	const [data, setData] = useState({
		title: '',
		description: '',
		image_url: '',
		publisher: '',
		ingredients: []
	});

	const handleChange = e => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<div className="Create-Recipe">
			<h1 className="Create-Recipe__title"> Create Recipe </h1>

			<Card className="Create-Recipe__Card">
				<CardContent>
					<form onSubmit={handleSubmit}>
						<div className="Create-Recipe__field">
							<label className="Create-Recipe__label col-3">Recipe Name</label>
							<input
								type="text"
								onChange={handleChange}
								className="Create-Recipe__input col-8"
								name="title"
							/>
						</div>
						<br />
						<div className="Create-Recipe__field">
							<label className="Create-Recipe__label col-3">Description</label>
							<input
								type="text"
								onChange={handleChange}
								className="Create-Recipe__input col-8"
								name="description"
							/>
						</div>
						<br />
						<div className="Create-Recipe__field">
							<label className="Create-Recipe__label col-3">Image Url</label>
							<input
								type="url"
								onChange={handleChange}
								className="Create-Recipe__input col-8"
								name="image_url"
							/>
						</div>
						<br />
						<div className="Create-Recipe__field">
							<label className="Create-Recipe__label col-3">Publisher</label>
							<input
								type="text"
								onChange={handleChange}
								className="Create-Recipe__input col-8"
								name="publisher"
							/>
						</div>
						<br />
						<Button
							title="Create Recipe"
							type="submit"
							className="Create-Recipe__submit-btn"
						/>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default CreateRecipe;
