import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'

import NameForm from '../imports/ui/NameForm.jsx';

Meteor.startup(() => {
  render(
    (<BrowserRouter>
      <Route path="/" component={NameForm}/>
    </BrowserRouter>),
    document.getElementById('render-target'));
});
