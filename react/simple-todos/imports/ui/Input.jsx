import React, { Component } from 'react';

export default class Input extends Component {

  constructor(props) {
  super(props);
  this.state = {value: ''};
  this.handleChange = this.handleChange.bind(this);
}


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    return (
      <label>
        Name:
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          maxLength = {this.props.maxLngth}
          ref = {node => this.textInput = node}
          placeholder = "Input your name"
          />
      </label>

    );

  }

}
