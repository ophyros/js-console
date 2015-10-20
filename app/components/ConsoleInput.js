import React, { Component } from 'react';
import '../styles/console-input.styl';

class ConsoleInput extends Component {
  constructor() {
    super();
    this.history = [];
    this.historyIndex = 0;
  }
  
  handleKeyPress(e) {
    if (e.key === 'ArrowUp') {
      this.historyIndex--;
      if (this.historyIndex < 0) {
        this.historyIndex = 0;
        return;
      } else {
        this.refs.command.value = this.history[this.historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      this.historyIndex++;
      if (this.historyIndex >= this.history.length) {
        this.historyIndex = this.history.length;
        return;
      } else {
        this.refs.command.value = this.history[this.historyIndex];
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    var command = this.refs.command.value.trim();
    if (!command) return;
    this.props.onCommandSubmit(command); // команда уходит в таб на исполнение
    this.historyIndex = this.history.push(command);
    if (this.historyIndex > 10) {
      this.history.shift();
      this.historyIndex--;
    }
    this.refs.command.value = '';
  }

  render() {
    return (
      <form className="console-form" onSubmit={this.handleSubmit.bind(this)} onKeyDown={this.handleKeyPress.bind(this)}>
        <input className="console-input" type="text" placeholder="Enter command" ref="command" />
        <input className="console-submit" type="submit" />
      </form>
    )
  }
}

export default ConsoleInput;