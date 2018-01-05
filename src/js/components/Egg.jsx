import React from 'react';
import styles from '../../scss/components/_egg.scss'

export default class Egg extends React.Component {
  renderContentEgg() {
    const eggIsOpen = this.props.eggIsOpen;
    const currentEgg = this.props.currentEgg;

     // px 
    //  const BOTTOM_MAX = 220;
    //  const BOTTOM_MIN = 100;
 
     // %
     const LEFT_MAX = 90;
     const LEFT_MIN = 10;

    // random animation based on min/max value 
    // let posY = Math.floor(Math.random() * (BOTTOM_MAX - BOTTOM_MIN + 1) + BOTTOM_MIN);
    let posX = Math.floor(Math.random() * (LEFT_MAX - LEFT_MIN + 1) + LEFT_MIN);
    console.log(posX)

    if (eggIsOpen) {
      const animationStyle = {
        left: posX
      };       
    }

    return (
      <div className={`egg ${eggIsOpen ? 'isOpen' : '' }`} style={this.animationStyle}>
        <img className="image" src={`./static/images/${currentEgg}.png`} />
      </div>
    )
  }

  render() {
    const currentEgg = this.props.currentEgg;

    return (
      <div>
        { currentEgg ? this.renderContentEgg() : null }
      </div>
    )
  }
}