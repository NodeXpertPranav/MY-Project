import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Tasks } from '../api/tasks.js';
import { Link } from 'react-router-dom';
import Input from './Inputs/TextInput.jsx';
import CheckBox from './Inputs/CheckBox.jsx';
import SelectBox from './Inputs/SelectBox.jsx';
import ShowPlayer from './ShowPlayer.jsx';



export default class AddPlayer extends Component {

  constructor(props){
    super(props);

  //  console.log(_id);
    //const field = Tasks.find({_id}).fetch();
    //console.log(field[0].FirstName);
    this.state ={
      loading : true,
      firstName : '',
      lastName : '',
      dob : '',
      role : '',
      birthPlace :'',
      totalScore : '',
      century : '',
      halfCentury :'',
      boundry: '',
      six: '',
    };

  }


    handleSubmit = (event)=>{
      event.preventDefault();

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
      //const dd= moment(dob,'YYYY/MM/DD').format('DD/MM/YYYY');

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
        const _id = this.props.match.params.id;
      Meteor.call('tasks.update',_id, firstName,lastName,dob,role,birthPlace,totalScore,century,halfCentury,boundry,six, (err, res) => {
        if(err){
          console.log(err);
        }
        else{
          alert ("data updated successfully");
        }
      });

    }


    componentWillMount(){
      const id = this.props.match.params.id;
      Meteor.call('fetchField',id,(err,data)  => {
        if(err){
          console.log(err);
        }
        else{
          console.log("inside will mount");
          this.setState(
            {
              firstName : data.FirstName,
              lastName : data.LastName,
              dob : data.DOB,
              role : data.Role,
              birthPlace :data.BirthPlace,
              totalScore : data.TotalScore,
              century : data.Century,
              halfCentury :data.HalfCentury,
              boundry: data.boundry,
              six: data.Six,
              loading : false
            }
          );
        }
      });
    }

  render() {
      if(this.state.loading){
      return <div> loading</div>
      }
      return(
        <form onSubmit = {this.handleSubmit}>
        <div >
        <h1> Fill all the Detail of a player </h1>

        <b>Enter First Name:</b> &nbsp;&nbsp;&nbsp;
        <Input type ="text" name ='FirstName' value = {this.state.firstName} placeholder = "enter your first name"  ref = {node => this.firstName = node}/>
        &nbsp;<CheckBox type ="checkbox" />
        <br/> <br/>

        <b>Enter Last Name:</b> &nbsp;&nbsp;&nbsp;
        <Input type ="text" name ="LastName" value = {this.state.lastName} placeholder = "enter your name last name"  ref = {node => this.lastName = node}/>
        &nbsp;<CheckBox type ="checkbox" />
        <br/> <br/>

        <b>Enter Date of Birth:</b>
        <Input type ="date" value = {this.state.dob} placeholder = "dd/mm/yyyy " ref ={node => this.dob = node}/>
        &nbsp;<CheckBox type ="checkbox" />
        <br/> <br/>

        <b>Role: </b> &nbsp;&nbsp;
        <SelectBox value = {this.state.role} ref = {node => this.textOption =node}/>
        <br/> <br/>

        <b>Birth Place: </b>&nbsp;&nbsp;&nbsp;
        <Input type ="text" name = "BirthPlace" value = {this.state.birthPlace} placeholder ="Enter Birth Place" ref = {node => this.birthPlace = node} />
        &nbsp;<CheckBox type ="checkbox" />
        <br/><br/>

        <b>No of Runs Scored </b>
        <Input type ="text" name = "TotalScore" value = {this.state.totalScore} placeholder = "Total Run Scored" ref ={node => this.totalScore =node}/>
        <br/> <br/>

        <b>No of Centuries </b>
        <Input type ="text" name= "Century" value = {this.state.century} placeholder = "Total Number of Centuries"  ref ={node => this.century =node}/>
        <br/> <br/>

        <b>No of Half Centuries </b>
        <Input type ="text" name= "HalfCentury" value = {this.state.halfCentury} placeholder = "Total Number of Half Centuries" ref ={node => this.halfCentury =node}/>
        <br/> <br/>

        <b>No of Boundries </b>
        <Input type ="text" name= "Boundry" value = {this.state.boundry} placeholder = "Total Boundries" ref ={node => this.boundry =node}/>
        <br/> <br/>

        <b>No of Sixes </b>
        <Input type ="text" name="Six" value = {this.state.six} placeholder = "Total Sixes" ref ={node => this.six =node}/>
        <br/> <br/>

        <b>Profile Picture: </b>
        <Input type ="file"/>
        <br/> <br/>
        <input type = "submit" value = "save" />
        </div>
      </form>

    );
  }

}
