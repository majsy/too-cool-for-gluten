import React from 'react';
import data from '../../../static/data/app.json'
import styles from '../../scss/components/_footer.scss'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <a className="cta btnText" href={data.footer.url} target="_blank">By {data.footer.credit}</a>
      </div>
    )
  }
}