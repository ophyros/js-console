import React, { Component } from 'react';
import '../styles/console-block.styl';

import ConsoleTab from './ConsoleTab';
import ConsoleContent from './ConsoleContent';

class ConsoleBlock extends Component {
  constructor() {
    super();
    this.state = { tabs: [],
                  contents: [],
                  activeId: 0
                 };
    this.id = 0;
    this.newTab();
  }
  
  newTab() {
    let tabs = this.state.tabs;
    let contents = this.state.contents;
    tabs.push(<ConsoleTab id={this.id} key={this.id} click={this.handleClick.bind(this)} />);
    contents.push(<ConsoleContent id={this.id} key={this.id} />);
    let activeId = this.id;
    this.id++;
    this.setState({tabs, contents, activeId});
  }
  
  closeTab(id) {
    let tabs = this.state.tabs;
    let contents = this.state.contents;
    let activeId = this.state.activeId;
    tabs[id] = null;
    contents[id] = null;
    activeId--;
    this.setState({tabs, contents, activeId});
  }

  handleKeyPress(e) {
    if (e.keyCode === 78 && e.altKey) {
      this.newTab();
    } else if (e.keyCode === 87 && e.altKey) {
      this.closeTab(this.state.activeId);
    }
  }

  handleClick(id) {
    let tmp = this.state;
    tmp.activeId = id;
    this.setState(tmp);
  }
  
  render() {
    let tabs = this.state.tabs.map((tab, index) => {
        if (tab != null) {
          return React.cloneElement(tab, {
            active: (this.state.activeId == index)
          })
        }
    })
    return (
      <div className="console-block" onKeyDown={this.handleKeyPress.bind(this)}>
        {tabs}
        {this.state.contents[this.state.activeId]}
      </div>
    );
  }
}

export default ConsoleBlock;