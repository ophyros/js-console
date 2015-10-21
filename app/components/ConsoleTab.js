import React, { Component } from 'react';
import '../styles/console-tab.styl';

import classNames from 'classnames';

class ConsoleTab extends Component {
  handleClick() {
    this.props.click(this.props.id);
  }
  
  render() {
    let tabClass = classNames({
      'console-tab-header': true,
      'console-tab-header-active': this.props.active
    });
    return (
      <h1 className={tabClass} onClick={this.handleClick.bind(this)}>Tab {this.props.id}</h1>
    )
  }
}

export default ConsoleTab;