import React, { Component } from 'react';

export default class Email extends Component {

  render() {
    return (
      <label>
        Email:
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
         type="email"
         ref = {node => this.textEmail = node}
         placeholder = "Enter your Email Adress"/>
      </label>
    );
  }

}
