import React from 'react';
import data from '../../../static/data/app.json'
import styles from '../../scss/components/_button.scss'

export default class Button extends React.Component {
  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <div className={`button-container ${this.props.buttonIsShowing ? 'isShowing' : ''}`}>
        <button className="button btnText" onClick={this.handleClick}>{data.button}</button>
      </div>
    )
  }
}