import React, { Component } from 'react';

export default class CheckBox extends Component {

  render() {
    return (
      <label>
      
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
