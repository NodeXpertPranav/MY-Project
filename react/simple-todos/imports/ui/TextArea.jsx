import React, { Component } from 'react';

export default class TextArea extends Component {

  render() {
    return (
      <label>
      About You!: &nbsp;
      <textarea ref = {node => this.textArea =node} />
      </label>
    );
  }

}
