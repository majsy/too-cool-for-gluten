import React from 'react';
import data from '../../../static/data/app.json'
import styles from '../../scss/components/_footer.scss'
import ButtonAbout from './ButtonAbout.jsx'

export default class Footer extends React.Component {
  handleIconClick = () => {
    this.props.handleIconClick();
  }

  render() {
    return (
      <div className="footer">
        <ButtonAbout handleIconClick={this.handleIconClick} />
        <a className="cta btnText" href={data.footer.url} target="_blank">By {data.footer.credit}</a>
      </div>
    )
  }
}