import React from 'react';
import styles from '../../scss/components/_loader.scss'

export default class Loader extends React.Component {
  render() {
    return (
      <div className="loader">
        <p className="copy">Loading awesomeness...</p>
      </div>
    )
  }
}