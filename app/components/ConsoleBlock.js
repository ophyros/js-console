import React, { Component } from 'react';
import '../styles/console-block.styl';

import ConsoleTab from './ConsoleTab';

class ConsoleBlock extends Component {
  render() {
    // здесь будет много табов
    return (
      <div className="console-block">
        <ConsoleTab />
      </div>
    );
  }
}

export default ConsoleBlock;