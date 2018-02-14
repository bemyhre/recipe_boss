import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import preload from '../data.json';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: 'this is a debug statement'
		};
		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}

	handleSearchTermChange(event) {
		this.setState({ searchTerm: event.target.value });
	}
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
				{preload.recipes.map(recipe => <RecipeCard key={recipe.recipeUrl} recipe={recipe} />)}
			</div>
		);
	}
}

export default Search;
