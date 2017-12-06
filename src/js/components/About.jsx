import React from 'react';
import data from '../../../static/data/app.json'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h3>{data.about.title}</h3>
      </div>
    )
  }
}