import React from 'react';
import data from '../../../static/data/app.json'
import styles from '../../scss/components/recipe-container.scss'

export default class RecipeContainer extends React.Component {
  hideRecipes() {
    recipes.forEach(recipe => recipe.classList.add('isHidden'));
  }

  render() {
    return (
      <div className={styles.container}>
        <p>{data.recipeDescription}</p>

      </div>  
    )
  }
}