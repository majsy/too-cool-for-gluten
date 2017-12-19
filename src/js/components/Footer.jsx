import React from 'react';
import styles from '../../scss/components/_footer.scss'
import ButtonAbout from './ButtonAbout.jsx'

export default class Footer extends React.Component {
  handleIconClick = () => {
    this.props.handleIconClick();
  }

  renderContentFooter() {
    const data = this.props.data;
    const isLoaded = this.props.dataIsLoaded;
    
    return (
      <div className={`inner-container`}>
        <ButtonAbout handleIconClick={this.handleIconClick} />
        <p className={`credit btnText`}>By <a href={data.creditUrl} className="cta btnText" target="_blank">{data.creditLabel}</a></p>
      </div>
    )
  }

  render() {
    const data = this.props.data;
    
    return (
      <div className={`footer ${data ? 'isShowing' : ''}`}>
        { data ? this.renderContentFooter() : null }
      </div>
    )
  }
}