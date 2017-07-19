import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './body.html';

Template.head.onCreated(function bodyOnCreated() {
  Meteor.subscribe('tasks');

});

Template.head.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const date = target.date.value;
    // Insert a task into the collection

    Meteor.call('tasks.insert', text,date);
    // Clear form
    target.text.value = '';
  },
});

Template.Today.helpers({
  tasks() {
         return Tasks.find({ deadline: { $eq: 1 } });
  },

});

Template.ThisWeek.helpers({
  tasks1() {
         return Tasks.find({ $and : [{deadline : { $gte : 2 } }, {deadline : { $lte : 7 } } ]});
  },
});

Template.Later.helpers({
  tasks2() {
        return Tasks.find({ $and : [{deadline : { $gte : 8 } }, {deadline : { $lte : 15 } } ]});
  },
});
