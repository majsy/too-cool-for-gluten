import React from 'react';
import Header from './Header.jsx'
import Button from './Button.jsx'
import RecipeContainer from './RecipeContainer.jsx'
import Footer from './Footer.jsx'
import PopupAbout from './PopupAbout.jsx'
import Egg from './Egg.jsx'
import recipes from '../../../static/data/recipes.json'
import styles from '../../scss/components/_app.scss'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {},
      currentRecipe: null,
      isLoaded: false,
      popupIsOpen: false,
      buttonClick: 0,
      eggIsOpen: false
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
      this.setState({currentRecipe: currentRecipe}),
      this.setState({buttonClick: this.state.buttonClick + 1})
    )
  }

  countButtonClick() {
    if (this.state.buttonClick === 11) {
      console.log('surprise!')
      this.setState({buttonClick: 0})
      this.openEgg();
    }
  }

  openEgg() {
    this.setState({eggIsOpen: true})
  }

  closeEgg() {
    this.setState({eggIsOpen: false})
  }

  handleIconClick = () => {
    this.setState({popupIsOpen: !this.state.popupIsOpen})
  }

  handleClick = () => {
    this.getRecipe()
    this.countButtonClick()
  }

  render() {
    return (
      <div className="app-container">
        <Header headerIsShowing={this.state.isLoaded} />
        <Button handleClick={this.handleClick} buttonIsShowing={this.state.isLoaded} />
        <RecipeContainer currentRecipe={this.state.currentRecipe}/>
        <Footer handleIconClick={this.handleIconClick} />
        <PopupAbout popupIsOpen={this.state.popupIsOpen} />
        <Egg eggIsOpen={this.state.eggIsOpen} />
      </div>
    )
  }
}