import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ConsoleBlock from './components/ConsoleBlock';

class App extends Component {
  render() {
    return <ConsoleBlock />;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
