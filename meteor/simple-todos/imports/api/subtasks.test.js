import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { subTasks } from './collections.js';
import './schema.js';

if (Meteor.isServer) {
  describe('subTasks', () => {
    describe('methods', () => {
      const userId = Random.id();
      let taskId;

      beforeEach(() => {
        subTasks.remove({});
        taskId = subTasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
        });
      });

      it('can delete owned subtask', () => {
        // Find the internal implementation of the task method so we can
      // test it in isolation
      const deleteTask = Meteor.server.method_handlers['subtasks.remove'];

      // Set up a fake method invocation that looks like what the method expects
      const invocation = { userId };

      // Run the method with `this` set to the fake invocation
      deleteTask.apply(invocation, [taskId]);

      // Verify that the method does what we expected
      assert.equal(subTasks.find().count(), 0);
      });

      // beforeEach(() => {
      //   Tasks.remove({});
      // //  taskId = Tasks.insert({
      //   //  text: 'test task',
      //     //createdAt: new Date(),
      //   //  owner: userId,
      //   //  username: 'tmeasday',
      //   //});
      // });
      //
      // it('can insert owned task', () => {
      //   const insertTask = Meteor.server.method_handlers['tasks.insert'];
      //   const invocation = { userId };
      //   insertTask.apply(invocation, ["pranav"]);
      //   assert.equal(Tasks.find().count(), 1);
      // });

      beforeEach(() => {
        subTasks.remove({});
        taskId = subTasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
        });
      });

      it('can checked owned subtask', () => {
        const checkedTask = Meteor.server.method_handlers['subtasks.setChecked'];
        const invocation = { userId };
        checkedTask.apply(invocation, [taskId, !this.cheked]);
        assert.equal(subTasks.find({checked : true }).count(), 1);
      });

      beforeEach(() => {
        subTasks.remove({});
        taskId = subTasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
        });
      });

      it('can setPrivate owned subtask', () => {
        const setPrivateTask = Meteor.server.method_handlers['subtasks.setPrivate'];
        const invocation = { userId };
        setPrivateTask.apply(invocation, [taskId, !this.private]);
        assert.equal(subTasks.find({private : true }).count(), 1);
      });

   });
  });
}
