import React, { Component } from 'react';
import '../styles/console-output.styl';

class ConsoleOutput extends Component {
  constructor() {
    super();
    this.state = { result: "" };
  }

  printResult(result) {
    this.setState({ result: result }); // кладем результат в стейт, компонент перерисовывается.
    // надо не заменять содержимое стейта, а добавлять
  }

  render() {
    return <div className="console-output">{this.state.result}</div>;
  }
}

export default ConsoleOutput;