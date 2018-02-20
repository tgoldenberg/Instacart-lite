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
    // TODO: fetch local storage - then send to backend
    let cookie = localStorage.getItem('unsaved_user');
    let unsavedUser = JSON.parse(cookie);
    let { firstName, lastName, email, phoneNumber, region, age } = unsavedUser;
    let response = await axios.post('/submit-application', { firstName, lastName, email, phoneNumber, region, age });
    console.log('> Response: ', response);
    let user = response.data.user;
    Cookie.set('user', JSON.stringify(user));
    localStorage.setItem('user', JSON.stringify(user));
    Router.push('/success');
  }
  render() {
    return (
      <Wrapper {...this.props} >
        <div className="outside-container flex-column">
          {/* <img src="https://d2nkqaulr5muje.cloudfront.net/assets/applicants/landing_page/landing_page_bg-min-2dbf0751ab4e800d44d6981383d7ce4677046bf412bdc3fd41a822b3d18c1a0b.jpg" style={{ opacity: 0.5, position: 'absolute', width: '100%', bottom: 0 }}/> */}
          <section className="content-container flex-column">
            <div className="flex-column">
              <h1>Confirm</h1>
            </div>
            <br />
            <section className="flex">
              <Button label="CONFIRM" onClick={this.handleConfirm}/>
            </section>
          </section>
        </div>
      </Wrapper>
    )
  }
}
