import React from 'react';
import styles from '../../scss/components/_button-about.scss'

export default class ButtonAbout extends React.Component {
  handlePopup = () => {
    this.props.handlePopup();
  }

  render() {
    const label = this.props.label;
    const isShowing = this.props.isShowing;

    return (
      <button className={`button-about ${this.props.isShowing}`} onClick={this.handlePopup}>
        <span className={`cta btnText`}>{label}</span>
      </button>
    )
  }
}