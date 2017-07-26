import React, { Component } from 'react';

export default class Submit extends Component {

  constructor(props) {
   super(props);
   this.state = {value: ''};

   this.handleSubmit = this.handleSubmit.bind(this);
 }



 handleSubmit(event) {
  //  alert('A name was submitted: ' + this.state.value);
  
   event.preventDefault();

 }


  render() {
    return (
      <label>
         <button type="submit"  value="Submit">Submit</button>
      </label>
    );
  }

}
