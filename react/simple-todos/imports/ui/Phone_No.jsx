import React, { Component } from 'react';

export default class Phone_No extends Component {

  render() {
    return (

      <label>
        Phone No.:
      &nbsp;
       <input
       type="text"
       ref = {node => this.textPhone =node}
       placeholder = "Enter your phone number"/>
      </label>

    );
  }

}
