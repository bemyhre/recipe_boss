import React from 'react';
import preload from '../data.json';

const Search = () => (
	<div className="search">
		{preload.recipes.map(recipe => (
			<div className="show-card">
				<img alt={`${recipe.name} Recipe Poster`} src={`${recipe.imageUrl}`} />
				<div>
					<h3>
						<a href={`${recipe.recipeUrl}`}>{recipe.name}</a>
					</h3>
					<div>
						{recipe.ingredients.map(ingredient => (
							<div className="ingredient-card">{ingredient.description}</div>
						))}
					</div>
				</div>
			</div>
		))}
	</div>
);

export default Search;
