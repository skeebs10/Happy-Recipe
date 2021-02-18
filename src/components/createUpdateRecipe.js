import React, { useEffect } from 'react';
import Button from './Buttons';
import '../scss/Components/CreateUpdateRecipe.scss';

//component updates recipes and creates

const CreatUpdateRecipe = ({
	handleSubmit,
	handleChange,
	data,
	update,
	handleAddIngredient,
	ingredientName

	///using props in here from index.js file under CreatRecipe page
}) => {
	return (
		<div className="Create-Update-Recipe__Card">
			<form onSubmit={handleSubmit}>
				<div className="Create-Update-Recipe__field col-12 ">
					<label className="Create-Update-Recipe__label col-sm-12 col-md-3">
						Recipe Name
					</label>
					<input
						type="text"
						onChange={handleChange}
						className="Create-Update-Recipe__input col-sm-12 col-md-9"
						name="title"
						value={data?.title}
						placeholder=""
					/>
				</div>
				<br />
				<div className="Create-Update-Recipe__field col-12">
					<label className="Create-Update-Recipe__label col-sm-12 col-md-3">
						Description
					</label>
					<input
						type="text"
						onChange={handleChange}
						className="Create-Update-Recipe__input col-sm-12 col-md-9"
						name="description"
						value={data?.description}
						placeholder=""
					/>
				</div>
				<br />
				<div className="Create-Update-Recipe__field col-12">
					<label className="Create-Update-Recipe__label col-sm-12 col-md-3">
						Image Url
					</label>
					<input
						type="url"
						onChange={handleChange}
						className="Create-Update-Recipe__input col-sm-12 col-md-9"
						name="image_url"
						value={data?.image_url}
						placeholder=""
					/>
				</div>
				<br />
				<div className="Create-Update-Recipe__field col-12">
					<label className="Create-Update-Recipe__label col-sm-12 col-md-3">
						Publisher
					</label>
					<input
						type="text"
						onChange={handleChange}
						className="Create-Update-Recipe__input col-sm-12 col-md-9"
						name="publisher"
						value={data?.publisher}
						placeholder=""
					/>
				</div>
				<br />
				<div className="Create-Update-Recipe__field col-12">
					<label className="Create-Update-Recipe__label col-sm-12 col-md-3">
						Ingredients
					</label>
					<div className="Create-Update-Recipe__ingredient col-sm-12 col-md-9">
						<input
							type="text"
							onChange={handleChange}
							className="Create-Update-Recipe__ingredient-input"
							name="ingredients"
							value={ingredientName}
							placeholder=""
						/>
						<div
							className="Create-Update-Recipe__ingredient-add"
							onClick={handleAddIngredient}
							type="button"
						>
							&nbsp; +Add
							{/* adds a space */}
						</div>
					</div>
				</div>
				<div className="Create-Update-Recipe__list-Recipe">
					{!!data?.ingredients?.length &&
						data?.ingredients.map((ingredient, index) => (
							<li
								key={index}
								className="col-sm-6 col-md-4 Create-Update-Recipe__list-Recipe-item"
							>
								{ingredient}
							</li>
						))}
				</div>
				<Button
					title={update ? 'Update Recipe' : 'Create Recipe'}
					type="submit"
					className="Create-Update-Recipe__submit-btn"
				/>
			</form>
		</div>
	);
};

export default CreatUpdateRecipe;
