import React, { Component } from 'react';
import '../styles/console-tab.styl';

import ConsoleOutput from './ConsoleOutput';
import ConsoleInput from './ConsoleInput';

class ConsoleTab extends Component {
  executeCommand(command) {
    //тут команда будет исполняться
    var result = command;
    this.refs.output.printResult(result); // результат уходит в аутпут
  }

  render() {
    return (
      <div className="console-tab">
        <h1 className="console-tab-header">Tab</h1>
        <ConsoleOutput ref="output" />
        <ConsoleInput onCommandSubmit={this.executeCommand.bind(this)} />
      </div>
    );
  }
}

export default ConsoleTab;