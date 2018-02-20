import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import React, { Component } from 'react';

import Head from 'next/head';
import Home from 'components/Home';
import styles from 'styles/main.scss';

export default class Page extends Component {
  static async getInitialProps(ctx) {
    /* TODO: check if token in localStorage - if so, validate and set as logged in */
    return {
      user: null,
      loggedIn: false,
    };
  }
  render() {
    return (
      <MuiThemeProvider>
        <div id="app">
          <Head >
            <style dangerouslySetInnerHTML={{ __html: styles }} />
          </Head>
          <Home {...this.props} />
        </div>
      </MuiThemeProvider>
    )
  }
}
