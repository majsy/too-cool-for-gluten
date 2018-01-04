import React from 'react';
import styles from '../../scss/components/_popup-about.scss'

export default class PopupAbout extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <div className={`popup-container ${this.props.popupIsOpen ? 'isOpen' : ''}`}>
        { data ? <p className="copy" dangerouslySetInnerHTML={{__html: data.aboutCopy}}></p> : null }
      </div>
    )
  }
}