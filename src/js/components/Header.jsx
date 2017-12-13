import React from 'react';
import styles from '../../scss/components/_header.scss'

export default class Header extends React.Component {
  renderContentHeader() {
    const data = this.props.data;

    return (
      <div>
        <h1 className={`title display1`}>{data.title}</h1>
        <p className="subhead display4">{data.subhead}</p>
      </div>
    )
  }

  render() {
    const data = this.props.data;

    return (
      <div className={`header ${data ? 'isShowing' : ''}`}>
        { data ? this.renderContentHeader() : null}
      </div>
    )
  }
}