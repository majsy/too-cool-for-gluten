import React from 'react';
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
      <div className={`recipe-container ${this.props.currentRecipe ? 'isShowing' : ''}`}>

        { this.displayCurrentRecipe() }
      </div>  
    )
  }
}