import React from 'react';
import Header from './Header.jsx'
import Button from './Button.jsx'
import RecipeContainer from './RecipeContainer.jsx'
import Footer from './Footer.jsx'
import PopupAbout from './PopupAbout.jsx'
import Egg from './Egg.jsx'
import Loader from './Loader.jsx'
import styles from '../../scss/components/_app.scss'
import {END_POINT} from "../common/end-points";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentRecipe: null,
      dataIsLoaded: false,
      appData: null,
      recipeData: null,
      popupIsOpen: false,
      buttonClick: 0,
      eggIsOpen: false
    }
  }

  componentDidMount() {
    if (!this.state.dataIsLoaded) this.loadData();
  }

  loadData() {
    if (this.state.dataIsLoaded) return;

    this.loadAppData()
      .then(this.loadRecipeData)
      .then(() => {
        if (this.state.appData && this.state.recipeData) {
          this.setState({dataIsLoaded: true})
        }
      })
  }

  loadAppData = () => {
    return fetch(END_POINT.APP)
      .then(response => {
        if (response) {
          return response.json()
        }
      })
      .then((appData) => {
        this.setState({appData})
      })
      .catch((e) => {
        return e
      })
  }

  loadRecipeData = () => {
    return fetch(END_POINT.RECIPES)
      .then(response => {
        if (response) {
          return response.json()
        }
      })
      .then((recipeData) => {
        this.setState({recipeData})
      })
      .catch((e) => {
        return e
      }) 
  }

  getRecipe() {
    const recipes = this.state.recipeData;
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
        <Header data={this.state.appData} 
         dataIsLoaded={this.state.dataIsLoaded} />
        <Button handleClick={this.handleClick} 
          data={this.state.appData} />
        <RecipeContainer currentRecipe={this.state.currentRecipe} />
        <Footer handleIconClick={this.handleIconClick} 
          data={this.state.appData}
          dataIsLoaded={this.state.dataIsLoaded} />
        <PopupAbout popupIsOpen={this.state.popupIsOpen} 
          data={this.state.appData} />
        <Egg eggIsOpen={this.state.eggIsOpen} />
    
        { !this.state.dataIsLoaded ? <Loader /> : null }
      </div>
        
    )
  }
}