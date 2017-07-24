import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import {Tasks} from './collections.js';



if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({
       $or: [
         { private: { $ne: true } },
         { owner: this.userId },
       ],
     });
  });
}

Meteor.methods({
  'tasks.insert'(text) {
    check(text, String);

    console.log(Meteor);
  // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {

      throw new Meteor.Error('not-authorized');
    }

    Tasks.insert({
      text,
      createdAt: new Date(),
       owner: Meteor.userId(),
       username: Meteor.user().username,
    });
  },

  'tasks.remove'(taskId) {
    check(taskId, String);
    // const task = Tasks.findOne(taskId);
    // console.log("meteor",Meteor.userId());
    // console.log("owner",task.owner);
    // if(Meteor.userId !== task.owner){
    //   throw new Meteor.console.error('not-authorized');
    // }
    Tasks.remove(taskId);
  },

  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    Tasks.update(taskId, { $set: { checked: setChecked } });
  },

  'tasks.setPrivate'(taskId, setToPrivate) {
      check(taskId, String);
      check(setToPrivate, Boolean);

      const task = Tasks.findOne(taskId);
        //  Make sure only the task owner can make a task private
      if (task.owner !== Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }

      Tasks.update(taskId, { $set: { private: setToPrivate } });
    },
});