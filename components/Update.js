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
      firstName: !!props.user ? props.user.firstName : '',
      lastName: !!props.user ? props.user.lastName : '',
      region: !!props.user ? props.user.region : '',
      phoneNumber: !!props.user ? props.user.phoneNumber : '',
      email: !!props.user ? props.user.email : '',
      age: !!props.user ? props.user.age : '',
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
    let user = { firstName, lastName, email, phoneNumber, region, age };
    localStorage.setItem('unsaved_user', JSON.stringify(user));
    Router.push('/confirm');
  }
  render() {
    return (
      <Wrapper {...this.props} >
        <div className="outside-container flex-column">
          <section className="flex-column content-container apply">
            <div className="flex-column">
              <h1>Update</h1>
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
                  defaultValue={this.state.firstName}
                  onChange={(e) => this.handleChange(e.target.value, 'firstName')}
                />
              </div>
              <div className="input-container">
                <TextField
                  className="text-field"
                  hintText="Last Name"
                  floatingLabelText="Last Name"
                  defaultValue={this.state.lastName}
                  errorText={this.state.lastNameError}
                  onChange={(e) => this.handleChange(e.target.value, 'lastName')}
                />
              </div>
              <div className="input-container">
                <TextField
                  className="text-field"
                  hintText="Email"
                  floatingLabelText="Email"
                  defaultValue={this.state.email}
                  errorText={this.state.emailError}
                  onChange={(e) => this.handleChange(e.target.value, 'email')}
                />
              </div>
              <div className="input-container">
                <TextField
                  className="text-field"
                  hintText="Phone Number"
                  floatingLabelText="Phone Number"
                  defaultValue={this.state.phoneNumber}
                  errorText={this.state.phoneNumberError}
                  onChange={(e) => this.handleChange(e.target.value, 'phoneNumber')}
                />
              </div>
              <div className="input-container">
                <TextField
                  className="text-field"
                  hintText="Region"
                  floatingLabelText="Region"
                  defaultValue={this.state.region}
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
                  defaultValue={this.state.age}
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
