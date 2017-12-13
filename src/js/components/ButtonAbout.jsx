import React from 'react';
import styles from '../../scss/components/_button-about.scss'

export default class ButtonAbout extends React.Component {
  handleIconClick = () => {
    this.props.handleIconClick();
  }

  render() {
    return (
      <button className="button button-about" onClick={this.handleIconClick}>?</button>
    )
  }
}