import React from 'react';
import styles from '../../scss/components/_egg.scss'

export default class Egg extends React.Component {
  renderContentEgg() {
    const eggIsOpen = this.props.eggIsOpen;
    const currentEgg = this.props.currentEgg;

    return (
      <div className={`egg hamburger ${eggIsOpen ? 'isOpen' : '' }`}>
        <img className="image" src={`./static/images/hamburger.png`} />
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