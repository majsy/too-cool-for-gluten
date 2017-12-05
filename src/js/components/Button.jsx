import React from 'react';
import data from '../../../static/data/app.json'

export default class Button extends React.Component {
  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <button onClick={this.handleClick}>{data.button}</button>
    )
  }
}