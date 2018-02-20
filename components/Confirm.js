import React, { Component } from 'react';

import Button from 'material-ui/RaisedButton';
import Cookie from 'js-cookie';
import Link from 'next/link';
import MenuItem from 'material-ui/MenuItem';
import Router from 'next/router';
import Wrapper from 'components/Wrapper';
import axios from 'axios';

export default class Home extends Component {
  constructor() {
    super();
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  async handleConfirm() {
    let unsavedUser = localStorage.getItem('unsaved_user');
    let data = JSON.parse(unsavedUser);
    let response = await axios.post('/submit-application', data);
    let user = response.data.user;
    Cookie.set('user', JSON.stringify(user));
    Router.push('/success');
  }
  render() {
    return (
      <Wrapper {...this.props} >
        <div className="outside-container flex-column">
          <section className="content-container flex-column">
            <div className="flex-column">
              <h1>Confirm</h1>
            </div>
            <br />
            <section className="flex">
              <Button label="CONFIRM" onClick={this.handleConfirm}/>
            </section>
            <br />
            <Link href="/"><a>Cancel</a></Link>
          </section>
        </div>
      </Wrapper>
    )
  }
}
