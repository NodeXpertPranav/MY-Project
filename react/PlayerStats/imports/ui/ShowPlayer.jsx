import  React,{ Component} from 'react' ;
import { createContainer } from 'meteor/react-meteor-data'
import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';

export  class ShowPlayer extends Component{

  renderTasks = ()=> {
      console.log(this.props.tasks);
      return this.props.tasks.map((task) => (
        <Task key={task._id} task={task} />
    ));
  }

  render(){
    return (
        <table>
        <tbody>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>DOB</th>
          <th>Role</th>
          <th>Birth Place</th>
          <th>Total Score</th>
          <th>Century</th>
          <th>Half Century</th>
          <th>Boundry</th>
          <th>Sixes</th>
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
