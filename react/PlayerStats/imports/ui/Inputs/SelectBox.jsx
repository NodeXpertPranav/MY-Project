import React, { Component } from 'react';

export default class SelectBox extends Component {

  render() {
    return (
      <label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select ref = {node => this.textOption =node}>
        <option value="Bowler">Bowler</option>
        <option value="Bats Man">Bats Man</option>
        <option value="All Rounder">All Rounder</option>

        </select>
      </label>

    );
  }
}
