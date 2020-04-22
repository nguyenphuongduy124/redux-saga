import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles.js';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from './../Taskboard';
import theme from './../../commoms/Theme';

class App extends Component {
  render() {
    var { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Taskboard></Taskboard>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
