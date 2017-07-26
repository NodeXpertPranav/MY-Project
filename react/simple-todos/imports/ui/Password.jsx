import React, { Component } from 'react';

export default class Password extends Component {

  render() {
    return (
      <label>
        Password:
      &nbsp;
      <input
      type="password"
      ref = {node => this.textPass =node}
       />
      </label>
    );
  }

}
