import React, { Component } from 'react';

export default class Options extends Component {

  constructor(props) {
   super(props);
   this.state = {value: 'GEN'};
   this.handleChange = this.handleChange.bind(this);
 }

 handleChange(event) {
   this.setState({value: event.target.value});
 }

  render() {
    return (
      <label>
         Select Your Category &nbsp;
        <select value={this.state.value} ref = {node => this.textOption =node} onChange={this.handleChange}>
          <option value="GEN">GEN</option>
          <option value="OBC">OBC</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
          <option value="OTHERS">OTHERS</option>
        </select>
      </label>
    );
  }

}
