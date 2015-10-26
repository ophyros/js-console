import React, { Component } from 'react';
import '../styles/console-content.styl';

import ConsoleOutput from './ConsoleOutput';
import ConsoleInput from './ConsoleInput';

class ConsoleContent extends Component {
  handleCommand(id, command) {
    this.props.onCommand(id, command);
  }
  
  handleKeyboard(id, e) {
    this.props.onKeyboard(id, e);
  }
  
  handleChange(id, text) {
    this.props.onInputChange(id, text);
  }
  
  render() {
    return (
      <div className="console-content">
        <ConsoleOutput tab={this.props.tab} />
        <ConsoleInput tab={this.props.tab} onCommandSubmit={this.handleCommand.bind(this)} onKeyboard={this.handleKeyboard.bind(this)} onInputChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default ConsoleContent;