import React, { Component } from 'react';
import { Tasks } from '../api/tasks.js';
import Input from './Inputs/TextInput.jsx';
import CheckBox from './Inputs/CheckBox.jsx';
import SelectBox from './Inputs/SelectBox.jsx';



export default class AddPlayer extends Component {

  constructor(props){
    super(props);
    this.state ={value : ''};

  }

    handleSubmit = (event)=>{
      event.preventDefault()
      const firstName = this.firstName.textInput.value;
      const lastName = this.lastName.textInput.value;
      const dob = this.dob.textInput.value;
      const role = this.textOption.textOption.value;
      const birthPlace = this.birthPlace.textInput.value;
      const totalScore = this.totalScore.textInput.value;
      const century = this.century.textInput.value;
      const halfCentury = this.halfCentury.textInput.value;
      const boundry = this.boundry.textInput.value;
      const six = this.boundry.textInput.value;

      console.log('First Name is: '+firstName);
      console.log('Last Name is: '+lastName);
      console.log('DOb Name is: '+dob);
      console.log('Role Name is: '+role);
      console.log('Birth place is: '+birthPlace);
      console.log('Total score is: '+totalScore);
      console.log('Century is: '+century);
      console.log('halfCentury is: '+halfCentury);
      console.log('BOundry is: '+boundry);
      console.log('Six is: '+six);

      //inserting task to Databse
      Tasks.insert({
          FirstName : firstName,
          LastName : lastName,
          DOB :dob,
          Role :role,
          BirthPlace :birthPlace,
          TotalScore : totalScore,
          Century :century,
          HalfCentury : halfCentury,
          boundry : boundry,
          Six :six,
          createdAt: new Date(), // current time
        }, function(err,res){
          if(err){
            console.log("some Error");
          }
          else{
            console.log("Inserted in Databse");
          }
        });
    }

  render() {
    return (

      <form onSubmit = {this.handleSubmit}>
        <div >
        <h1> Fill all the Detail of a player </h1>

        <b>Enter First Name:</b> &nbsp;&nbsp;&nbsp;
        <Input type ="text"  placeholder = "enter your first name"  ref = {node => this.firstName = node}/>
        <br/> <br/>

        <b>Enter Last Name:</b> &nbsp;&nbsp;&nbsp;
        <Input type ="text" placeholder = "enter your name last name" ref = {node => this.lastName = node}/>
        <br/> <br/>

        <b>Enter Date of Birth:</b>
        <Input type ="date" placeholder = "dd/mm/yyyy " ref ={node => this.dob = node}/>
        <br/> <br/>

        <b>Role: </b> &nbsp;&nbsp;
        <SelectBox ref = {node => this.textOption =node}/>
        <br/> <br/>

        <b>Birth Place: </b>&nbsp;&nbsp;&nbsp;
        <Input type ="text" placeholder ="Enter Birth Place" ref = {node => this.birthPlace = node} />
        <br/><br/>

        <b>No of Runs Scored </b>
        <Input type ="number" placeholder = "Total Run Scored" ref ={node => this.totalScore =node}/>
        <br/> <br/>

        <b>No of Centuries </b>
        <Input type ="number" placeholder = "Total Number of Centuries" ref ={node => this.century =node}/>
        <br/> <br/>

        <b>No of Half Centuries </b>
        <Input type ="number" placeholder = "Total Number of Half Centuries" ref ={node => this.halfCentury =node}/>
        <br/> <br/>

        <b>No of Boundries </b>
        <Input type ="number" placeholder = "Total Boundries" ref ={node => this.boundry =node}/>
        <br/> <br/>

        <b>No of Sixes </b>
        <Input type ="number" placeholder = "Total Sixes" ref ={node => this.six =node}/>
        <br/> <br/>

        <b>Profile Picture: </b>
        <Input type ="file"/>
        <br/> <br/>

        <input type = "submit" value = "submit" />
        </div>
      </form>

    );
  }

}
