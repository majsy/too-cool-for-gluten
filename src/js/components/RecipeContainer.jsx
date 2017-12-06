import React from 'react';
import data from '../../../static/data/app.json'
import styles from '../../scss/components/_recipe-container.scss'
import RecipeLink from './RecipeLink.jsx'

export default class RecipeContainer extends React.Component {
  displayCurrentRecipe() {
    let currentRecipe = this.props.currentRecipe;

    if (currentRecipe) {
      return <RecipeLink title={currentRecipe.title} url={currentRecipe.url} />
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <p>{data.recipeDescription}</p>

        { this.displayCurrentRecipe() }
      </div>  
    )
  }
}