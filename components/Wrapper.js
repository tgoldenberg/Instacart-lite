import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Cookie from 'js-cookie';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Link from 'next/link';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Router from 'next/router';

export default class Wrapper extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  logout() {
    Cookie.remove('user');
    Router.push('/');
  }
  render() {
    let { loggedIn, user } = this.props;
    return (
      <div>
        <AppBar
          iconElementLeft={(
            <Link prefetch href="/">
              <MenuItem primaryText="Home" style={{ color: 'white' }}/>
            </Link>
          )}
          iconElementRight={loggedIn ? (
            <IconMenu
              className="navigation-close"
              iconButtonElement={<IconButton><NavigationMenu /></IconButton>}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <Link prefetch href="/update">
                <MenuItem primaryText="Update Profile" />
              </Link>
              <MenuItem primaryText="Logout" onClick={this.logout} />
            </IconMenu>
          ) : (
            <Link prefetch href="/apply">
              <MenuItem primaryText="Apply Now" style={{ color: 'white' }}/>
            </Link>
          )}
        />
        {this.props.children}
      </div>
    )
  }
}
