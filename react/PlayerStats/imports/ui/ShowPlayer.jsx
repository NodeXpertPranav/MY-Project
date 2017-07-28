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
      <div>
        <h1> Player Detail </h1>
        <ul>
        {this.renderTasks()}
        </ul>
        </div>
    );
  }
}

export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, ShowPlayer);
