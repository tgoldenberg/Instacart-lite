import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import React, { Component } from 'react';

import Apply from 'components/Apply';
import Cookie from 'js-cookie';
import Head from 'next/head';
import styles from 'styles/main.scss';

export default class Page extends Component {
  static async getInitialProps(ctx) {
    let cookieData = !!ctx.req && ctx.req.headers.cookie ? ctx.req.headers.cookie.split(';').find((c) => c.trim().startsWith('user=')) : Cookie.get('user');
    cookieData = cookieData ? decodeURIComponent(cookieData.replace('user=', '')) : null;
    let user = !!cookieData ? JSON.parse(cookieData) : null;
    let loggedIn = !!user;
    return { user, loggedIn };
  }
  componentDidMount() {
    document.getElementById("app").scrollIntoView();
  }
  render() {
    return (
      <MuiThemeProvider>
        <div id="app">
          <Head >
            <style dangerouslySetInnerHTML={{ __html: styles }} />
          </Head>
          <Apply {...this.props} />
        </div>
      </MuiThemeProvider>
    )
  }
}
