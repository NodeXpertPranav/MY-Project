import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { subTasks } from '../api/collections.js';
import './subtask.html';
import './body.html';

Template.subfoot.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('subtasks');
});

Template.subfoot.helpers({
  subtasks() {
    const instance = Template.instance();
    return subTasks.find({parentId:FlowRouter.current().params.taskid}, { sort: { createdAt: -1 } });
  },

});
Template.subhead.events({
  'submit .sub-task'(event) {

    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;


    // Insert a task into the collection
    Meteor.call('subtasks.insert', text, FlowRouter.current().params.taskid, function(err,res){
     if(err){
         alert("Limit can exceed");
     }
    });
    // Clear form
    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});

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
