import React from 'react';
import styles from '../../scss/components/_footer.scss'
import ButtonAbout from './ButtonAbout.jsx'
import { BUTTON_LABELS } from "../common/button-labels"

export default class Footer extends React.Component {
  handlePopup = () => {
    this.props.handlePopup();
  }

  renderContentFooter() {
    const data = this.props.data;
    const label = this.props.label;
    const isLoaded = this.props.dataIsLoaded;
    const popupIsOpen = this.props.popupIsOpen;
    
    return (
      <div className={`inner-container`}>
        <ButtonAbout handlePopup={this.handlePopup}
          label={BUTTON_LABELS.CLICKED}
          isShowing={`popupButton ${popupIsOpen ? 'isShowingLabel' : ''}`} /> 
        <ButtonAbout handlePopup={this.handlePopup}
          label={BUTTON_LABELS.DEFAULT}
          isShowing={`popupButton ${!popupIsOpen ? 'isShowingLabel' : ''}`} /> 
        <p className={`credit btnText`}>by <a href={data.creditUrl} className="cta btnText" target="_blank">{data.creditLabel}</a></p>
      </div>
    )
  }

  render() {
    const data = this.props.data;
    
    return (
      <footer className={`footer ${data ? 'isShowing' : ''}`}>
        { data ? this.renderContentFooter() : null }
      </footer>
    )
  }
}