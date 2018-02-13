import React from 'react';
import RecipeCard from './RecipeCard';
import preload from '../data.json';

const Search = () => (
	<div className="search">
		<header>
			<h1>Recipe Boss</h1>
			<input type="text" placeholder="Search" />
		</header>
		{preload.recipes.map(recipe => <RecipeCard key={recipe.recipeUrl} recipe={recipe} />)}
	</div>
);

export default Search;
