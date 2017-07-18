import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './subtask.html';
import './body.html';
Template.subtask.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

Template.subtask.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('subtasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('subtasks.remove', this._id);
  },
  'click .toggle-private'() {
   Meteor.call('subtasks.setPrivate', this._id, !this.private);
 },
});
