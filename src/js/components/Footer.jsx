import React from 'react';
import styles from '../../scss/components/_footer.scss'
import ButtonAbout from './ButtonAbout.jsx'

export default class Footer extends React.Component {
  handleIconClick = () => {
    this.props.handleIconClick();
  }

  renderContentFooter() {
    const data = this.props.data;
    
    return (
      <div className="inner-container">
        <ButtonAbout handleIconClick={this.handleIconClick} />
        {/* <a className="cta btnText" href={data.footer.url} target="_blank">By {data.footer.credit}</a> */}
        <a className="cta btnText" target="_blank">By Majsan</a>
      </div>
    )
  }

  render() {
    const data = this.props.data;
    
    return (
      <div className={`footer ${data ? 'isShowing' : ''}`}>
        { data ? this.renderContentFooter() : null}
      </div>
    )
  }
}