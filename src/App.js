import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  handleTouchTap = (e) => {
    console.log('tapped', e)
  }

  render() {
    return (
      <AppBar
        title="Bia"
        onTouchTap={ this.handleTouchTap } />
    );
  }
}

export default App;
