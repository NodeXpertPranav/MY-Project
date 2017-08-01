import  React,{ Component} from 'react' ;
import { Link } from 'react-router-dom';


export default class Task extends Component {
    printTask = ()=> {
      let array1 =[{key :'FirstName', value :" FirstName"},'LastName','DOB','Role',
                    'BirthPlace','TotalScore','Century',
                    'HalfCentury','boundry','Six'];
      return array1.map((item,key)=>{

          if((item.key) == 'FirstName'){
            return <td key ={key}><Link to={`/players/${this.props.task._id}`}>{this.props.task[item.key]}</Link></td>
          }
          return <td key ={key}> {this.props.task[item]} </td>

      });
    }

  render() {
    return (
      <tr>
      {this.printTask()}
      </tr>
    );
  }
}
