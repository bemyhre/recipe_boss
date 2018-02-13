import React from 'react';
import RecipeCard from './RecipeCard';
import preload from '../data.json';

const Search = () => <div className="search">{preload.recipes.map(recipe => <RecipeCard recipe={recipe} />)}</div>;

export default Search;
