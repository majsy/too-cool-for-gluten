import React from 'react';
import data from '../../../static/data/app.json'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.subhead}</p>
      </div>
    )
  }
}