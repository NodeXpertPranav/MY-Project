import React, { Component } from 'react';

import Input from './Input.jsx';
import Email from './Email.jsx';
import Password from './Password.jsx';
import Gender from './Gender.jsx';
import Phone_No from './Phone_No.jsx';
import TextArea from './TextArea.jsx';
import Options from './Options.jsx';
import Submit from './Submit.jsx';

export default class NameForm extends Component {

  render() {
    return (
      <div>
        <h1> A sample Input Form </h1>
        <Input  />
        <br/> <br/>
        <Email />
        <br/> <br/>
        <Password />
        <br/> <br/>
        <Gender />
        <br/> <br/>
        <Phone_No />
        <br/> <br/>
        <Options />
        <br/> <br/>
        <TextArea />
        <br/> <br/>
        <Submit />
      </div>
    );
  }

}
