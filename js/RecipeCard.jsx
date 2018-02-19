import React from 'react';
import { shape, string } from 'prop-types';
import IngredientCard from './IngredientCard';

const RecipeCard = props => (
  <div className="recipe-card">
    <div className="recipe-text-container">
      <h3>
        <a href={`${props.recipe.recipeUrl}`}>{props.recipe.name}</a>
      </h3>
      <img alt={`${props.recipe.name} Recipe Poster`} src={`${props.recipe.imageUrl}`} />
      <div>
        {props.recipe.ingredients.map(ingredient => <IngredientCard key={ingredient.name} ingredient={ingredient} />)}
      </div>
    </div>
  </div>
);

RecipeCard.propTypes = {
  recipe: shape({
    name: string.isRequired,
    recipeUrl: string.isRequired,
    imageUrl: string.isRequired,
    typeOfRecipe: string,
    ingredients: string.isRequired
  }).isRequired
};

export default RecipeCard;
