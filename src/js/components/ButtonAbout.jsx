import React from 'react';
import styles from '../../scss/components/_button-about.scss'
import FontAwesome from 'react-fontawesome';

export default class ButtonAbout extends React.Component {
  handleIconClick = () => {
    this.props.handleIconClick();
  }

  render() {
    const icon = this.props.icon;

    return (
      <button className="button-about" onClick={this.handleIconClick}>
        <FontAwesome className={`icon ${icon}`} name={icon} />
      </button>
    )
  }
}