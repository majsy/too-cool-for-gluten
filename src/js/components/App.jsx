import React from 'react';
import Header from './Header.jsx'
import Button from './Button.jsx'
import RecipeContainer from './RecipeContainer.jsx'
import Footer from './Footer.jsx'
import PopupAbout from './PopupAbout.jsx'
import recipes from '../../../static/data/recipes.json'
import styles from '../../scss/components/_app.scss'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentRecipe: null,
      isLoaded: false,
      popupIsOpen: false
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

  handleIconClick = () => {
    this.setState({popupIsOpen: !this.state.popupIsOpen})
  }

  handleClick = () => {
    this.getRecipe()
  }

  render() {
    return (
      <div className="app-container">
        <Header headerIsShowing={this.state.isLoaded} />
        <Button handleClick={this.handleClick} buttonIsShowing={this.state.isLoaded} />
        <RecipeContainer currentRecipe={this.state.currentRecipe}/>
        <Footer handleIconClick={this.handleIconClick} />
        <PopupAbout popupIsOpen={this.state.popupIsOpen} />
      </div>
    )
  }
}