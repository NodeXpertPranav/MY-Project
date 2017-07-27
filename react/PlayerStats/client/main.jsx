import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'

import AddPlayer from '../imports/ui/AddPlayer.jsx';

Meteor.startup(() => {
  const elements
  render(
    (<BrowserRouter>
      <div>
      <ul>
        <li><a href ="/add">Add Player Detail</a></li>
        <li><a href ="/about">Show</a></li>
      </ul>

       <Route exact path="/add" component={AddPlayer}/>

      </div>
    </BrowserRouter>),
    document.getElementById('render-target'));
});
