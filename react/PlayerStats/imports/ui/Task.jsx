import  React,{ Component} from 'react' ;

export default class Task extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.task.FirstName}</td>
        <td>{this.props.task.LastName}</td>
        <td>{this.props.task.DOB}</td>
        <td>{this.props.task.Role}</td>
        <td>{this.props.task.BirthPlace}</td>
        <td>{this.props.task.TotalScore}</td>
        <td>{this.props.task.Century}</td>
        <td>{this.props.task.HalfCentury}</td>
        <td>{this.props.task.boundry}</td>
        <td>{this.props.task.Six}</td>
      </tr>
    );
  }
}
