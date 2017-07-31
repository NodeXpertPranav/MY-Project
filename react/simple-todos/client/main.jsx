import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'

import NameForm from '../imports/ui/NameForm.jsx';
import Gender from '../imports/ui/Gender.jsx';

Meteor.startup(() => {
  render(
    (<BrowserRouter>
      <div>
       <Route exact path="/abc" component={Gender}/>
       <Route  exact path="/" component={NameForm}/>
      </div>
    </BrowserRouter>),
    document.getElementById('render-target'));
});