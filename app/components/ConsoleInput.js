import React, { Component } from 'react';
import '../styles/console-input.styl';

class ConsoleInput extends Component {

  handleSubmit(e) {
    e.preventDefault();
    var command = this.refs.command.value.trim();
    if (!command) return;
    this.props.onCommandSubmit(command); // команда уходит в таб на исполнение
    // тут наверно надо положить команду в историю
    this.refs.command.value = '';
    return;
  }

  render() {
    return (
      <form className="console-form" onSubmit={this.handleSubmit.bind(this)}>
        <input className="console-input" type="text" placeholder="Enter command" ref="command" />
        <input className="console-submit" type="submit" />
      </form>
    );
  }
}

export default ConsoleInput;