import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import {subTasks} from './collections.js';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('subtasks', function tasksPublication() {
    return subTasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
     });
  });
}

Meteor.methods({
  'subtasks.insert'(text,taskId) {
    check(text, String);
            // Make sure the user is logged in before inserting a task
    const limit = Meteor.settings.public.limit;
    console.log(limit);

    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

      let count = subTasks.find({parentId: taskId}).count()+1;
      console.log(count);

      if(count>limit){
        throw new Meteor.console.error("exceed");
      }
      subTasks.insert({
      text,
      parentId: taskId,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },

  'subtasks.remove'(taskId) {
    check(taskId, String);
    // const subtask = subTasks.findOne(taskId);
    // console.log("meteor",Meteor.userId());
    // console.log("owner",subtask.owner);
    // if(Meteor.userId !== subtask.owner){
    //   throw new Meteor.console.error('not-authorized');
    // }
    subTasks.remove(taskId);
  },

  'subtasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    subTasks.update(taskId, { $set: { checked: setChecked } });
  },
  'subtasks.setPrivate'(taskId, setToPrivate) {
      check(taskId, String);
      check(setToPrivate, Boolean);

      const task = subTasks.findOne(taskId);

      // Make sure only the task owner can make a task private
      if (task.owner !== Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }

      subTasks.update(taskId, { $set: { private: setToPrivate } });
    },
});
