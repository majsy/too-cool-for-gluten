import React from 'react';
import Header from './Header.jsx'
import About from './About.jsx'
import Button from './Button.jsx'
import RecipeContainer from './RecipeContainer.jsx'
import recipes from '../../../static/data/recipes.json'
import styles from '../../scss/base/_global.scss'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentRecipe: null
    }
  }

  getRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length)
    const currentRecipe = recipes[randomIndex];

    return (
      this.setState({currentRecipe: currentRecipe})
    )
  }

  handleClick = () => {
    this.getRecipe()
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <About />
        <Button handleClick={this.handleClick} />
        <RecipeContainer currentRecipe={this.state.currentRecipe}/>
      </div>
    )
  }
}