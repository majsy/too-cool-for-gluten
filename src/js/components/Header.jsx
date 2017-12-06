import React from 'react';
import data from '../../../static/data/app.json'
import styles from '../../scss/components/_header.scss'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">{data.title}</h1>
        <p className="subhead">{data.subhead}</p>
      </div>
    )
  }
}