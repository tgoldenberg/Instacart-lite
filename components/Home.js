import React, { Component } from 'react';

import Button from 'material-ui/RaisedButton';
import Link from 'next/link';
import MenuItem from 'material-ui/MenuItem';
import Wrapper from 'components/Wrapper';

export default class Home extends Component {
  render() {
    return (
      <Wrapper {...this.props} >
        <div className="outside-container flex-column">
          <section className="content-container flex-column">
            <div className="flex-column">
              <h1>Instacart</h1>
            </div>
            <br />
            <section className="flex">
              <Link prefetch href="/apply">
                {this.props.loggedIn ? (
                  <h4>Welcome {this.props.user.firstName}!</h4>
                ) : (
                  <Button label="Apply Now"/>
                )}
              </Link>
            </section>
          </section>
        </div>
      </Wrapper>
    )
  }
}
