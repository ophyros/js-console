import React, { Component } from 'react';
import '../styles/console-input.styl';

class ConsoleInput extends Component {
  handleKeyDown(e) {
    this.props.onKeyboard(this.props.tab.id, e);
  }
  
  hanldeChange(e) {
    this.props.onInputChange(this.props.tab.id, e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    var command = this.refs.command.value.trim();
    if (!command) return;
    this.props.onCommandSubmit(this.props.tab.id, command);
  }

  render() {
    return (
      <form className="console-form" onSubmit={this.handleSubmit.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}>
        <input className="console-input" type="text" placeholder="Enter command" ref="command" value={this.props.tab.inputValue} onChange={this.hanldeChange.bind(this)} autoFocus />
        <input className="console-submit" type="submit" />
      </form>
    )
  }
}

export default ConsoleInput;