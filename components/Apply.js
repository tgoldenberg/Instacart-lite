import React, { Component } from 'react';

import Button from 'material-ui/RaisedButton';
import Link from 'next/link';
import MenuItem from 'material-ui/MenuItem';
import Router from 'next/router';
import TextField from 'material-ui/TextField';
import Wrapper from 'components/Wrapper';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      region: '',
      phoneNumber: '',
      email: '',
      age: '',
      firstNameError: '',
      lastNameError: '',
      regionError: '',
      emailError: '',
      phoneNumberError: '',
      ageError: '',
    }
  }
  handleChange(val, field) {
    let newState = {};
    newState[field] = val;
    this.setState(newState);
  }
  async handleSubmit() {
    let { firstName, lastName, email, phoneNumber, region, age } = this.state;
    let newState = {};
    if (!firstName) {
      newState["firstNameError"] = "Must provide a valid first name";
    }
    if (!lastName) {
      newState["lastNameError"] = "Must provide a valid last name.";
    }
    if (!email) {
      newState["emailError"] = "Must provide a valid email address.";
    }
    if (!phoneNumber) {
      newState["phoneNumberError"] = "Must provide a phone number.";
    }
    if (!region) {
      newState["regionError"] = "Must provide a region (i.e. New York).";
    }
    if (!age) {
      newState["ageError"] = "Must provide age.";
    }
    this.setState(newState);

    let user = { firstName, lastName, email, phoneNumber, region, age };
    localStorage.setItem('unsaved_user', JSON.stringify(user));
    if (Object.keys(newState).length === 0) {
      Router.push('/confirm');
    }
  }
  render() {
    return (
      <Wrapper {...this.props} >
        <div className="outside-container flex-column">
          <section className="flex-column content-container apply">
            <div className="flex-column">
              <h1>Sign Up</h1>
            </div>
            <br />
            <section className="flex-column form-container">
              <div className="input-container">
                <TextField
                  className="text-field"
                  hintText="First Name"
                  floatingLabelText="First Name"
                  errorText={this.state.firstNameError}
                  autoFocus={true}
                  onChange={(e) => this.handleChange(e.target.value, 'firstName')}
                />
              </div>
              <div className="input-container">
                <TextField
                  className="text-field"
                  hintText="Last Name"
                  floatingLabelText="Last Name"
                  errorText={this.state.lastNameError}
                  onChange={(e) => this.handleChange(e.target.value, 'lastName')}
                />
              </div>
              <div className="input-container">
                <TextField
                  className="text-field"
                  hintText="Email"
                  floatingLabelText="Email"
                  errorText={this.state.emailError}
                  onChange={(e) => this.handleChange(e.target.value, 'email')}
                />
              </div>
              <div className="input-container">
                <TextField
                  className="text-field"
                  hintText="Phone Number"
                  floatingLabelText="Phone Number"
                  errorText={this.state.phoneNumberError}
                  onChange={(e) => this.handleChange(e.target.value, 'phoneNumber')}
                />
              </div>
              <div className="input-container">
                <TextField
                  className="text-field"
                  hintText="Region"
                  floatingLabelText="Region"
                  errorText={this.state.regionError}
                  onChange={(e) => this.handleChange(e.target.value, 'region')}
                />
              </div>
              <div className="input-container">
                <TextField
                  className="text-field"
                  hintText="Age"
                  floatingLabelText="Age"
                  errorText={this.state.ageError}
                  onChange={(e) => this.handleChange(e.target.value, 'age')}
                />
              </div>
              <section className="flex">
                <Button label="SUBMIT" onClick={this.handleSubmit} />
            </section>
            </section>
          </section>
        </div>
      </Wrapper>
    )
  }
}
