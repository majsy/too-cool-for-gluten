import React from 'react'
import Header from './Header.jsx'
import Button from './Button.jsx'
import RecipeContainer from './RecipeContainer.jsx'
import Footer from './Footer.jsx'
import PopupAbout from './PopupAbout.jsx'
import Loader from './Loader.jsx'
import styles from '../../scss/components/_app.scss'
import { END_POINT } from "../common/end-points"
import { BUTTON_LABELS } from "../common/button-labels"

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentRecipe: null,
      dataIsLoaded: false,
      appData: null,
      recipeData: null,
      popupIsOpen: false
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
      this.setState({currentRecipe})
    )
  }

  handlePopup = () => {
    if (!this.state.popupIsOpen) {
      this.setState({popupIsOpen: true})
    } else if (this.state.popupIsOpen) {
      this.setState({popupIsOpen: false})
    }
  }

  handleClick = () => {
    this.getRecipe()
  }

  render() {
    return (
      <div className="app-container">
        <Header data={this.state.appData} 
         dataIsLoaded={this.state.dataIsLoaded} />
        <Button handleClick={this.handleClick} 
          data={this.state.appData} />
        <RecipeContainer currentRecipe={this.state.currentRecipe} />
        <Footer handlePopup={this.handlePopup} 
          data={this.state.appData}
          dataIsLoaded={this.state.dataIsLoaded}
          popupIsOpen={this.state.popupIsOpen} />
        <PopupAbout popupIsOpen={this.state.popupIsOpen} 
          data={this.state.appData} />
    
        { !this.state.dataIsLoaded ? <Loader /> : null }
      </div>
        
    )
  }
}