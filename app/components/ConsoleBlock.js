import React, { Component } from 'react';
import '../styles/console-block.styl';

import ConsoleTab from './ConsoleTab';
import ConsoleContent from './ConsoleContent';
import TimeMachine from './TimeMachine';


class ConsoleBlock extends Component {
  constructor() {
    super();
    this.state = { tabs: [
                            {
                              id: 1,
                              history: [],
                              historyIndex: 0,
                              inputValue: "",
                              output: [],
                              active: true
                            }
                          ],
                  lastId: 2
                 };
    this.timeMachine = new TimeMachine;
  }
  
  newTab() {
    let tabs = this.state.tabs;
    let newId = this.state.lastId;
    tabs.push({id: newId, history: [], historyIndex: 0, inputValue: '', output: [], active: false});
    this.setActiveTab(newId);
    this.setState({tabs: tabs, lastId: newId + 1});
  }
  
  closeTab(id) {
    let tabs = this.state.tabs;
    if (tabs.length === 1) { return }
    let index = tabs.findIndex((tab) => { return tab.id === id });
    if (tabs[index].active) {
      if (index === 0) {
        this.setActiveTab(tabs[index+1].id);
      } else {
        this.setActiveTab(tabs[index-1].id);
      }
    }
    tabs.splice(index, 1);
    this.setState({tabs: tabs});
  }
  
  setActiveTab(id) {
    let tabs = this.state.tabs;
    tabs.map((tab) => {
      if (tab.id === id) {
        tab.active = true;
      } else {
        tab.active = false;
      }
    })
    this.setState({tabs: tabs});
  }
  
  getActiveTabId() {
    let index = this.state.tabs.findIndex((tab) => { return tab.active });
    return this.state.tabs[index].id;
  }
  
  getPrevCommand(id) {
    let tabs = this.state.tabs;
    let index = tabs.findIndex((tab) => { return tab.id === id });
    let tab = tabs[index];
    tab.historyIndex--;
    if (tab.historyIndex < 0) {
      tab.historyIndex = 0;
    }
    tab.inputValue = tab.history[tab.historyIndex];
    tabs[index] = tab;
    this.setState({tabs: tabs});
  }
  
  getNextCommand(id) {
    let tabs = this.state.tabs;
    let index = tabs.findIndex((tab) => { return tab.id === id });
    let tab = tabs[index];
    tab.historyIndex++;
    if (tab.historyIndex > tab.history.length) {
      tab.historyIndex = tab.history.length;
    }
    tab.inputValue = tab.history[tab.historyIndex];
    tabs[index] = tab;
    this.setState({tabs: tabs});
  }

  handleKeyboard(id, e) {
    if (e.keyCode === 78 && e.altKey) {
      this.newTab();
      return;
    } else if (e.keyCode === 87 && e.altKey) {
      this.closeTab(id);
      return;
    } else if (e.key === 'ArrowUp') {
      this.getPrevCommand(id);
    } else if (e.key === 'ArrowDown') {
      this.getNextCommand(id);
    }    
  }
  
  handleChange(id, text) {
    let tabs = this.state.tabs;
    let index = tabs.findIndex((tab) => { return tab.id === id });
    tabs[index].inputValue = text;
    this.setState({tabs: tabs});
  }

  handleTabHeaderClick(id) {
    this.setActiveTab(id);
  }
  
  handleCommand(id, command) {
    let result = '';
    let cmd = command.split(/\s/);
    let params = cmd.slice(1);
    
    switch (cmd[0]) {
      case 'time':
        result = this.timeMachine.getTime(params);
        break;
      case 'uptime':
        result = this.timeMachine.getUptime();
        break;
      case 'exit':
        this.closeTab(id);
        return;
      default:
        result = 'Unknown command';
    }
    
    let tabs = this.state.tabs;
    let index = tabs.findIndex((tab) => { return tab.id === id });
    tabs[index].output.push({command: command, result: result});
    
    let history = tabs[index].history;
    if ( history.push(command) > 10) {
      history.shift();
    }
    tabs[index].history = history;
    tabs[index].historyIndex = history.length;
    tabs[index].inputValue = '';
    
    this.setState({tabs: tabs});
  }
  
  
  
  render() {
    let tabs = this.state.tabs.map((tab, index) => {
      return <ConsoleTab tab={tab} key={index} onClick={this.handleTabHeaderClick.bind(this)} onKeyboard={this.handleKeyboard.bind(this)} />
    });
    let id = this.getActiveTabId();
    let activeTab = this.state.tabs.filter((tab) => {return tab.id === id });
    let content = <ConsoleContent tab={activeTab[0]} onCommand={this.handleCommand.bind(this)} onKeyboard={this.handleKeyboard.bind(this)} onInputChange={this.handleChange.bind(this)} />
    return (
      <div className="console-block">
        {tabs}
        {content}
      </div>
    );
  }
}

export default ConsoleBlock;