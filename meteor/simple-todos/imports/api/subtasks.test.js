import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { sinon }  from 'meteor/practicalmeteor:sinon';
import { subTasks } from './collections.js';
import {userId, userName} from './tasks.test.js';
import './schema.js';

if (Meteor.isServer) {
  describe('subTasks', () => {
    describe('stubmethods', () => {

      let taskId;

      describe('sub-remove',()=> {
        beforeEach(() => {
          subTasks.remove({});
          taskId = subTasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
          });
        });

        it('can delete owned subtask', () => {
        const deleteTask = Meteor.server.method_handlers['subtasks.remove'];
        deleteTask.apply({}, [taskId]);
        // Verify that the method does what we expected
        assert.equal(subTasks.find().count(), 0);
        });
      });

      describe('sub-insert', ()=>{
        beforeEach(() => {
          subTasks.remove({});
        });

        it('can insert owned task', () => {
          const insertTask = Meteor.server.method_handlers['subtasks.insert'];
          // const invocation = { userId };
          insertTask.apply({}, ["pranav"]);
          assert.equal(subTasks.find().count(), 1);
        });
      });

      describe("sub-check", ()=>{
        beforeEach(() => {
          subTasks.remove({});
          taskId = subTasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
          });
        });

        it('can checked owned subtask', () => {
          const checkedTask = Meteor.server.method_handlers['subtasks.setChecked'];
          //const invocation = { userId };
          checkedTask.apply({}, [taskId, !this.cheked]);
          assert.equal(subTasks.find({checked : true }).count(), 1);
        });
      });

      describe('sub-private', ()=>{
        beforeEach(() => {
          subTasks.remove({});
          taskId = subTasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
          });
        });
        it('can setPrivate owned subtask', () => {
          const setPrivateTask = Meteor.server.method_handlers['subtasks.setPrivate'];
      //    const invocation = { userId };
          setPrivateTask.apply({}, [taskId, !this.private]);
          assert.equal(subTasks.find({private : true }).count(), 1);
        });
      });
   });
  });
}
