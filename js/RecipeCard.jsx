import React from 'react';
import IngredientCard from './IngredientCard';

const RecipeCard = props => (
	<div className="show-card">
		<img alt={`${props.recipe.name} Recipe Poster`} src={`${props.recipe.imageUrl}`} />
		<div>
			<h3>
				<a href={`${props.recipe.recipeUrl}`}>{props.recipe.name}</a>
			</h3>
			<div>{props.recipe.ingredients.map(ingredient => <IngredientCard ingredient={ingredient} />)}</div>
		</div>
	</div>
);

export default RecipeCard;
