import React, { Component } from 'react';

export default class TextInput extends Component {
  constructor(props) {
   super(props);
   this.state = {value:'', valid: false, message:''};
 }

 // componentDidMount() {
 //    console.log("inside did mount");
 //    this.setState({valid:true});
 //    console.log(this.state.valid);
 //  }
 // VALIDATION OF TEXT INPUT FIELD
 checkAlpha = (event)=>{
   console.log("inside checkAlpha");
   const alpha = /^[a-zA-Z]+$/;
   let x =event.target.value.length;
   if(x<=10){
     if(!alpha.test(event.target.value)){
       event.preventDefault();
       event.stopPropagation();
       console.log("if part");
       return false;
      }
       console.log("else part");
       console.log(this.state.valid);
       return true;
   } else{
      alert("Limit can Not Exceed to 20 chracter")
      event.preventDefault();
   }
 }

 checkNumber =(event)=>{
   let x =event.target.value.length;
   console.log("inside checkNumber");
   if(x<=10){
     const number = /^[0-9]+$/;
     if(!number.test(event.target.value)){
       return false;
     }
    return true;
  } else{
    alert("Number can be maximum upto 10 digit")
  }
 }

 handleChange= (event) =>{
   console.log(event.target.value);
  switch (this.props.name){
    case 'FirstName' : this.setState({ valid: this.checkAlpha(event),message :this.state.valid==true?'':"Only Text Field is allowed"})
          break;
    case 'LastName' : this.setState({ valid: this.checkAlpha(event),message :this.state.valid==true?'':"Only Text Field is allowed"})
          break;
    case 'BirthPlace' : this.setState({ valid: this.checkAlpha(event),message :this.state.valid==true?'':"Only Text Field is allowed"})
          break;
    case 'TotalScore' : this.setState({valid: this.checkNumber(event),message :this.state.valid==true?'':"Only Number Field is allowed"})
          break;
    case 'Century' : this.setState({valid: this.checkNumber(event),message :this.state.valid==true?'':"Only Number Field is allowed"})
          break;
    case 'Boundry' : this.setState({ valid: this.checkNumber(event),message :this.state.valid==true?'':"Only Number Field is allowed"})
          break;
    case 'HalfCentury' : this.setState({ valid: this.checkNumber(event),message :this.state.valid==true?'':"Only Number Field is allowed"})
          break;
    case 'Six' : this.setState({ valid: this.checkNumber(event),message :this.state.valid==true?'':"Only Number Field is allowed"})
          break;
  }

 }

  render() {
    return (
      <label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          ref = {node => this.textInput = node}
          name = {this.props.name}
          onChange ={this.handleChange}
          />
        {this.state.message}
      </label>
    );
  }
}
