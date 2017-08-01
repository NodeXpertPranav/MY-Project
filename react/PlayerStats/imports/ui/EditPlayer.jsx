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
    const _id = this.props.match.params.id;
    console.log(_id);
    const field = Tasks.find({_id}).fetch();
    console.log(field[0].FirstName);
    this.state ={
      redirectToNewPage: false,
      firstName : field[0].FirstName,
      lastName : field[0].LastName,
      dob : field[0].DOB,
      role : field[0].Role,
      birthPlace :field[0].BirthPlace,
      totalScore : field[0].TotalScore,
      century : field[0].Century,
      halfCentury :field[0].HalfCentury,
      boundry: field[0].boundry,
      six: field[0].Six,
    };
    console.log(this.state.redirectToNewPage);
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
      Tasks.update({_id: this.props.match.params.id},
          {$set :{
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
        }}, function(err,res){
          if(err){
            console.log("some Error");
          }
          else{
            console.log("Updated in Databse");
            //this.setState({ redirectToNewPage: true });
            console.log(this.state.redirectToNewPage);
          }
        });
    }


    componentDidMount(){
      this.firstName.textInput.value=this.state.firstName;
      this.lastName.textInput.value= this.state.lastName;
      this.dob.textInput.value = this.state.dob;
      this.textOption.textOption.value=this.state.role;
      this.birthPlace.textInput.value=this.state.birthPlace;
      this.totalScore.textInput.value=this.state.totalScore;
      this.century.textInput.value= this.state.century;
      this.halfCentury.textInput.value= this.state.halfCentury;
      this.boundry.textInput.value= this.state.boundry;
      this.boundry.textInput.value= this.state.six;
    }

  render() {
    return (

      <form onSubmit = {this.handleSubmit}>
        <div >
        <h1> Fill all the Detail of a player </h1>

        <b>Enter First Name:</b> &nbsp;&nbsp;&nbsp;
        <Input type ="text" name ='FirstName' placeholder = "enter your first name"  ref = {node => this.firstName = node}/>
        &nbsp;<CheckBox type ="checkbox" />
        <br/> <br/>

        <b>Enter Last Name:</b> &nbsp;&nbsp;&nbsp;
        <Input type ="text" name ="LastName" placeholder = "enter your name last name"  ref = {node => this.lastName = node}/>
        &nbsp;<CheckBox type ="checkbox" />
        <br/> <br/>

        <b>Enter Date of Birth:</b>
        <Input type ="date" placeholder = "dd/mm/yyyy " ref ={node => this.dob = node}/>
        &nbsp;<CheckBox type ="checkbox" />
        <br/> <br/>

        <b>Role: </b> &nbsp;&nbsp;
        <SelectBox ref = {node => this.textOption =node}/>
        <br/> <br/>

        <b>Birth Place: </b>&nbsp;&nbsp;&nbsp;
        <Input type ="text" name = "BirthPlace" placeholder ="Enter Birth Place" ref = {node => this.birthPlace = node} />
        &nbsp;<CheckBox type ="checkbox" />
        <br/><br/>

        <b>No of Runs Scored </b>
        <Input type ="text" name = "TotalScore" placeholder = "Total Run Scored" ref ={node => this.totalScore =node}/>
        <br/> <br/>

        <b>No of Centuries </b>
        <Input type ="text" name= "Century" placeholder = "Total Number of Centuries"  ref ={node => this.century =node}/>
        <br/> <br/>

        <b>No of Half Centuries </b>
        <Input type ="text" name= "HalfCentury" placeholder = "Total Number of Half Centuries" ref ={node => this.halfCentury =node}/>
        <br/> <br/>

        <b>No of Boundries </b>
        <Input type ="text" name= "Boundry" placeholder = "Total Boundries" ref ={node => this.boundry =node}/>
        <br/> <br/>

        <b>No of Sixes </b>
        <Input type ="text" name="Six" placeholder = "Total Sixes" ref ={node => this.six =node}/>
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
