import React, { Component } from 'react';

export default class SelectBox extends Component {

 renderSelect =()=>{
   const select = ['Bowler', 'Bats Man', 'All Rounder'];
   return select.map((item, key)=>{
     return <option key ={key}>{item}</option>
   });
 }
  render() {

    return (
      <label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select ref = {node => this.textOption =node}>
        {this.renderSelect()}
        </select>
      </label>

    );
  }
}
