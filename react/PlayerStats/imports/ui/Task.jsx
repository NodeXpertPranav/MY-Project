import  React,{ Component} from 'react' ;
import { Link } from 'react-router-dom';


export default class Task extends Component {
    printTask = ()=> {
      let array1 =['FirstName' ,'LastName','DOB','Role',
                    'BirthPlace','TotalScore','Century',
                    'HalfCentury','boundry','Six', {key : 'edit', value: 'EDIT'}];
      return array1.map((item,key)=>{

          if((item.key) == 'edit'){
            return <td key ={key}><Link to={`/players/${this.props.task._id}`}> <input type ="button" value ="EDIT" /></Link></td>
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
