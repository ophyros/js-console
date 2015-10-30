import React, { Component } from 'react';
import '../styles/console-content.styl';

class ConsoleContent extends Component {
  render() {
    return (
      <div className="console-content">
        {this.props.children}
      </div>
    );
  }
}

export default ConsoleContent;