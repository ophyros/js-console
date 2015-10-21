import React, { Component } from 'react';
import '../styles/console-output.styl';

class ConsoleOutput extends Component {
  constructor() {
    super();
    this.state = { text: [] };
  }

  printResult(command, result) {
    let tmp = this.state.text;
    tmp.push({command: command, result: result});
    this.setState(tmp);
  }

  render() {
    let text = this.state.text.map((line, index) => {
          return (
            <p key={index}>
              {line.command}<br />
              {line.result}
            </p>
        )});
    return (
      <div className="console-output">
        {text}
      </div>
    )
  }
}

export default ConsoleOutput;