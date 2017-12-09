import React from 'react';
import data from '../../../static/data/app.json'
import styles from '../../scss/components/_header.scss'

export default class Header extends React.Component {
  render() {
    return (
      <div className={`header ${this.props.headerIsShowing ? 'isShowing' : ''}`}>
        <h1 className="title display1">{data.title}</h1>
        <p className="subhead display4">{data.subhead}</p>
      </div>
    )
  }
}