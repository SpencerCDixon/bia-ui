import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import './index.css';

const Index = () => (
  <MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
