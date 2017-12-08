import React from 'react';
import data from '../../../static/data/app.json'
import styles from '../../scss/components/_recipe-link.scss'

export default class RecipeLink extends React.Component {
  render() {
    const title = this.props.title;
    const url = this.props.url;

    return (
      <a className="recipe-link cta display3" href={url} target="_blank">{title}</a>
    )
  }
}