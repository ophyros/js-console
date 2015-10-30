import React, { Component } from 'react';
import '../styles/console-tab.styl';

class ConsoleTab extends Component {
  handleKeyDown(e) {
    this.props.onKeyboard(this.props.tab.id, e);
  }
  
  handleClick() {
    this.props.onHeaderClick(this.props.tab.id);
  }
  
  handleCloseClick() {
    this.props.onCloseClick(this.props.tab.id);
  }
  
  render() {
    let className = 'console-tab-header '
    if (this.props.tab.active) {
      className += 'console-tab-header-active';
    }
    return (
      <div className={className} onKeyDown={this.handleKeyDown.bind(this)}>
        <span className='console-tab-header-text' onClick={this.handleClick.bind(this)}>Console {this.props.tab.id}</span>
        <div className='console-tab-close-button' onClick={this.handleCloseClick.bind(this)}>✖</div>
      </div>
    )
  }
}

export default ConsoleTab;