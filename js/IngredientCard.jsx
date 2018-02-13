import React from 'react';
import { shape, string } from 'prop-types';

const IngredientCard = props => <div className="ingredient-card">{props.ingredient.description}</div>;

IngredientCard.propTypes = {
	ingredient: shape({
		description: string.isRequired
	}).isRequired
};

export default IngredientCard;
