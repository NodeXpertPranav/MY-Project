import  React,{ Component} from 'react' ;

export default class Task extends Component {
  render() {
    return (
      <div> <h1>{this.props.task.FirstName} Detail</h1>
      <li>First Name: &nbsp;&nbsp;&nbsp;              {this.props.task.FirstName}</li>
      <li>Last Name:  &nbsp;&nbsp;&nbsp;              {this.props.task.LastName}</li>
      <li>DOB is:     &nbsp;&nbsp;&nbsp;              {this.props.task.DOB}</li>
      <li>Role is:     &nbsp;&nbsp;&nbsp;             {this.props.task.Role}</li>
      <li>Birth Place is:     &nbsp;&nbsp;&nbsp;      {this.props.task.BirthPlace}</li>
      <li>Total core is:      &nbsp;&nbsp;&nbsp;      {this.props.task.TotalScore}</li>
      <li>No of Century: &nbsp;&nbsp;&nbsp;           {this.props.task.Century}</li>
      <li>No of HalfCentury: &nbsp;&nbsp;&nbsp;       {this.props.task.HalfCentury}</li>
      <li>No of Boundry: &nbsp;&nbsp;&nbsp;           {this.props.task.boundry}</li>
      </div>
    );
  }
}
