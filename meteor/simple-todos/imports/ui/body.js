// import { Template } from 'meteor/templating';
//
// import './body.html';
//
// Template.body.helpers({
//   tasks: [
//     { text: 'This is task 1' },
//     { text: 'This is task 2' },
//     { text: 'This is task 3' },
//     { text: 'This is task 4' },
//   ],
// });
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tasks } from '../api/collections.js';

import './task.js';
import './body.html';
import './subtask.js';


Template.foot.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
  // Meteor.subscribe('subtasks');
});

Template.foot.helpers({
  tasks() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
     // If hide completed is checked, filter tasks
     return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
   }
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },

});

Template.head.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Meteor.call('tasks.insert', text);
    // Clear form
    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});
