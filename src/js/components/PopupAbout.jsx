import React from 'react';
import styles from '../../scss/components/_popup-about.scss'

export default class PopupAbout extends React.Component {
  render() {
    return (
      <div className={`popup-container ${this.props.popupIsOpen ? 'isOpen' : ''}`}>
        
      </div>
    )
  }
}