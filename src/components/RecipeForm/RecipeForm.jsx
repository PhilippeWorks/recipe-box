import React from 'react';

import Button from './../UI/Button/Button';

const recipeForm = (props) => { 

	return (
	<form method="post">
		<div>
			<label for="recipe-title">Recipe</label>
			<input type="text" id="recipe-title">
		</div>
		<div>
			<label for="recipe-ingredients">Ingredients</label>
			<input type="text" id="recipe-ingredients">
		</div>
		<div>
			<Button 
				label={"edit"} 
				handler={} /> 
			<Button 
				label={"close"} 
				handler={} />
		</div>
	</form>
	);
};

export default recipeForm;