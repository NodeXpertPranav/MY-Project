import React, { Component } from 'react';

export default class Radio extends Component {

  render() {
    return (
      <label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          name = {this.props.name}
          value = {this.props.value}
          />
      </label>

    );
  }
}
