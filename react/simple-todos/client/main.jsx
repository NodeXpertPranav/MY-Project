import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import NameForm from '../imports/ui/NameForm.jsx';

Meteor.startup(() => {
  render(<NameForm />, document.getElementById('render-target'));
});
