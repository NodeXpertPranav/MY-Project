import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Input from './Input.jsx';
import Email from './Email.jsx';
import Password from './Password.jsx';
import Gender from './Gender.jsx';
import Phone_No from './Phone_No.jsx';
import TextArea from './TextArea.jsx';
import Options from './Options.jsx';
import Submit from './Submit.jsx';

export default class NameForm extends Component {

  constructor(props){
    super(props);
    this.state ={value : ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault()
    const name = this.textInput.textInput.value;
    const email = this.textEmail.textEmail.value;
    const pass = this.textPass.textPass.value;
    //const gender = this.textGender.textGender.value;
    const phone = this.textPhone.textPhone.value;
    const area = this.textArea.textArea.value;
    const option = this.textOption.textOption.value;

    console.log('Name is: '+name);
    console.log('Email is: ' + email);
    console.log('Password is: ' +pass);
    console.log('Phone is: ' +phone);
    console.log('Your Category is: ' +option);
    console.log('Text Area is: ' +area);
  //  console.log('Gender is: ' +gender);

  Tasks.insert({
      name : name,
      email : email,
      pass : pass,
      phone : phone,
      area : area,
      option : option,
      createdAt: new Date(), // current time
    }, function(err,res){
      if(err){
        console.log("some Error");
      }
      else{
        console.log("Inserted in Databse");
      }
    });

    this.textInput.textInput.value = '';
    this.textEmail.textEmail.value = '';
    this.textPass.textPass.value = '';
    this.textArea.textArea.value = '';
    this.textPhone.textPhone.value = '';

  }
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <h1> A sample Input Form </h1>
        <Input type ="text" placeholder = "enter your name" maxLength = {4} ref = {node => this.textInput = node} id= "input" />
        <br/> <br/>
        <Email ref = {node => this.textEmail = node} />
        <br/> <br/>
        <Password ref = {node => this.textPass =node}/>
        <br/> <br/>
        <Gender ref = {node => this.textGender =node}/>
        <br/> <br/>
        <Phone_No ref = {node => this.textPhone =node}/>
        <br/> <br/>
        <Options ref = {node => this.textOption =node}/>
        <br/> <br/>
        <TextArea ref = {node => this.textArea =node}/>
        <br/> <br/>
        <input type = "submit" value = "submit" />
      </form>
    );
  }

}
