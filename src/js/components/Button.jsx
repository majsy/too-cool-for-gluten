import React from 'react';
import styles from '../../scss/components/_button.scss'

export default class Button extends React.Component {
  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    const data = this.props.data;

    return (
      <div className={`button-container ${data ? 'isShowing' : ''}`}>
        { data ? <button className="button btnText" onClick={this.handleClick}>{data.button}</button> : null }
      </div>
    )
  }
}