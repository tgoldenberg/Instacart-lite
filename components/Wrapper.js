import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Link from 'next/link';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

export default class Wrapper extends Component {
  render() {
    let { loggedIn, user } = this.props;
    return (
      <div>
        <AppBar
          iconElementLeft={<span />}
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
