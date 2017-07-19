import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
export const Tasks = new Mongo.Collection('tasks');


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
     return Tasks.find({},{endDate:1});
  });
}



Meteor.methods({
  'tasks.insert'(text,date) {
    check(text, String);
    var a = moment(date);
    var b = moment(new Date);
    var c = a.diff(b, 'days')+1;
    Tasks.insert({
      text,
      createdAt: new Date(),
      endDate : date,
      deadline : c,
    });
  },
});
