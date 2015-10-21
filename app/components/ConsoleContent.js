import React, { Component } from 'react';
import '../styles/console-content.styl';

import ConsoleOutput from './ConsoleOutput';
import ConsoleInput from './ConsoleInput';

class ConsoleContent extends Component {
  executeCommand(command) {
    let result = '';
    if (command.startsWith('time')) {
      if (command.includes('--format')) {
        let now = new Date;
        let dd = now.getDate();
        if (dd < 10) dd = '0' + dd;
        let mm = now.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        let yy = now.getFullYear();
        result = yy + '-' + mm + '-' + dd;
      } else {
        let options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
          timezone: 'UTC',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short'
        };
        result = new Date().toLocaleString('ru', options);
      }
    } else if (command.startsWith('uptime')) {
      result = 'uptime';
    } else if (command.startsWith('exit')) {
      result = this.props.closeTab(this.props.id);
    } else {
      result = 'unknown command';
    }
    this.refs.output.printResult(command, result);
  }
  
  render() {
    return (
      <div className="console-content">
        <ConsoleOutput ref="output" />
        <ConsoleInput onCommandSubmit={this.executeCommand.bind(this)} />
      </div>
    );
  }
}

export default ConsoleContent;