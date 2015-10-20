import React, { Component } from 'react';
import '../styles/console-block.styl';

import ConsoleTab from './ConsoleTab';

class ConsoleBlock extends Component {
  constructor() {
    super();
    this.state = { tabs: [] };
    this.id = 0;
    this.newTab();
  }
  
  newTab() {
    let tabs = this.state.tabs;
    this.id = tabs.push(<ConsoleTab closeTab={this.closeTab.bind(this)} openTab={this.newTab.bind(this)} id={this.id} />);
    this.setState(tabs);
  }
  
  closeTab(id) {
    if (this.state.tabs.length > 1) {
      console.log('closing ' + id);
      let tabs = this.state.tabs;
      tabs[id] = '';
      this.setState(tabs);
      return;
    } else {
      return 'can\'t close last tab';
    }
  }
  
  render() {
    return (
      <div className="console-block">
        {this.state.tabs}
      </div>
    );
  }
}

export default ConsoleBlock;