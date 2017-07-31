import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('PlayerDetail');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return true;
  });
}
