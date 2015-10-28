import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/console-output.styl';

class ConsoleOutput extends Component {
  componentDidUpdate() {
    let node = ReactDOM.findDOMNode(this);
    node.scrollTop = node.scrollHeight;
  }
  render() {
    let text = this.props.tab.output.map((line, index) => {
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