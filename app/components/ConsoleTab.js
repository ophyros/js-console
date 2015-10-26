import React, { Component } from 'react';
import '../styles/console-tab.styl';

class ConsoleTab extends Component {
  handleKeyDown(e) {
    this.props.onKeyboard(this.props.tab.id, e);
  }
  
  handleClick() {
    this.props.onClick(this.props.tab.id);
  }
  
  render() {
    let className = 'console-tab-header '
    if (this.props.tab.active) {
      className += 'console-tab-header-active';
    }
    return (
      <h1 className={className} onClick={this.handleClick.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}>Tab {this.props.tab.id}</h1>
    )
  }
}

export default ConsoleTab;