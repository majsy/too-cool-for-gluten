import React from 'react';
import Header from './Header.jsx'
import About from './About.jsx'
import Button from './Button.jsx'
import RecipeContainer from './RecipeContainer.jsx'
import Footer from './Footer.jsx'
import recipes from '../../../static/data/recipes.json'
import styles from '../../scss/base/_global.scss'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentRecipe: null,
      isLoaded: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoaded: true})
    }, 300)
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
        <Header headerIsShowing={this.state.isLoaded} />
        {/* <About /> */}
        <Button handleClick={this.handleClick} buttonIsShowing={this.state.isLoaded} />
        <RecipeContainer currentRecipe={this.state.currentRecipe}/>
        <Footer />
      </div>
    )
  }
}