import  React,{ Component} from 'react' ;
import { createContainer } from 'meteor/react-meteor-data'
import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';

export  class ShowPlayer extends Component{

  renderTasks = ()=> {
      //console.log(this.props.tasks);
      return this.props.tasks.map((task) => (
        <Task key={task._id} task={task} />
    ));
  }
  renderHeader= ()=> {
    const header = ['First Name', 'Last Name', 'DOB', 'Role', 'Birth Place', 'Total Score',
                    'Century', 'Half Century', 'Boundry', 'Six'];
    return header.map((item, key)=>{
      return <th key ={key} > {item} </th>
    });
  }

  render(){
    return (
        <table>
        <tbody>
        <tr>
        {this.renderHeader()}
        </tr>
          {this.renderTasks()}
          </tbody>
        </table>

    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('tasks');
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, ShowPlayer);
