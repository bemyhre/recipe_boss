import React from 'react';
import { shape, string } from 'prop-types';
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

RecipeCard.propTypes = {
	recipe: shape({
		name: string.isRequired,
		imageUrl: string.isRequired,
		ingredients: string.isRequired
	}).isRequired
};

export default RecipeCard;
