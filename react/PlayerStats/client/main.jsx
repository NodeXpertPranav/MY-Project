import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter,  Route} from 'react-router-dom';


import AddPlayer from '../imports/ui/AddPlayer.jsx';
import ShowPlayer from '../imports/ui/ShowPlayer.jsx';
import EditPlayer from '../imports/ui/EditPlayer.jsx';

class Main extends Component{

  render(){
    return (
      <ul>
        <br/><br/>
        <li><a href="/AddPlayer" target="_blank">AddPlayer</a></li>
        <li><a href="/about">Show Player Detail</a></li>
        <li> <a href="/edit-form"> Edit Player details</a></li>
      </ul>
    );
  }
}

Meteor.startup(() => {
  render(
    (<BrowserRouter>
        <div>
        <Route exact path="/" component={Main}/>
        <Route exact path="/AddPlayer" component={AddPlayer}/>
        <Route exact path="/about" component={ShowPlayer}/>
        <Route exact path="/edit-form" component={ShowPlayer}/>
        <Route exact path="/players/:id" target ="_blank" component={EditPlayer}/>
       </div>
    </BrowserRouter>),
    document.getElementById('render-target'));
});
