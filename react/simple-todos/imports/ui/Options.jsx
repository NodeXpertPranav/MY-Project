import React, { Component } from 'react';

export default class Options extends Component {

  render() {
    return (
      <label>
         Select Your Category &nbsp;
        <select>
          <option value="volvo">GEN</option>
          <option value="saab">OBC</option>
          <option value="opel">SC</option>
          <option value="audi">ST</option>
          <option value="audi">OTHERS</option>
        </select>
      </label>
    );
  }

}
