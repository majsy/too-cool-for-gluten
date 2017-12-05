import React from 'react';
import Header from './Header.jsx'
import Button from './Button.jsx'
import RecipeContainer from './RecipeContainer.jsx'
import recipes from '../../../static/data/recipes.json'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentRecipe: null
    }
  }
  // show currently active project
  // this.getProjectContent(projectId).classList.add('isVisible');

  getRecipe() {
    const data = recipes;

    const randomIndex = Math.floor(Math.random() * data.length)
    const currentRecipe = data[randomIndex];
    
    console.log(currentRecipe)
    
    return (
      this.setState({currentRecipe: currentRecipe})
    )
  }

  handleClick = () => {
    this.getRecipe()
  }

  render() {
    return (
      <div>
        <Header />
        <Button handleClick={this.handleClick} />
        <RecipeContainer currentRecipe={this.props.currentRecipe}/>
      </div>
    )
  }
}