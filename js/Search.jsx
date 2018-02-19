import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import preload from '../data.json';

class Search extends Component {
	state = {
		searchTerm: ''
	};

	handleSearchTermChange = event => {
		this.setState({ searchTerm: event.target.value });
	};

	recipeIngredientsText = ingredients => {
		const stringOfDescriptions = ingredients.map(el => el.description).toString();
		return stringOfDescriptions;
	};
	render() {
		return (
			<div className="search">
				<header>
					<h1>Recipe Boss</h1>
					<input
						onChange={this.handleSearchTermChange}
						value={this.state.searchTerm}
						type="text"
						placeholder="Search"
					/>
				</header>
				{preload.recipes
					.filter(
						recipe =>
							`${recipe.name} ${this.recipeIngredientsText(recipe.ingredients)}`
								.toUpperCase()
								.indexOf(this.state.searchTerm.toUpperCase()) >= 0
					)
					.map(recipe => <RecipeCard key={recipe.recipeUrl} recipe={recipe} />)}
			</div>
		);
	}
}

// test

export default Search;
