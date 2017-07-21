import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { Tasks } from './collections.js';
import './tasks.js';

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      const userId = sinon.stub(Meteor, "userId", ()=> {
        let id = "PGditkbw2Y5ZkaNkt";
        return id;
      });

      const userName = sinon.stub(Meteor, "user", ()=> {
        let name = "tmeasday";
        return name;
      });

      let taskId;

    describe('Remove', ()=> {
      beforeEach(() => {
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: userId,
          username: userName,
        });
      });

      it('can delete owned task', () => {
        // Find the internal implementation of the task method so we can
      // test it in isolation
      const deleteTask = Meteor.server.method_handlers['tasks.remove'];

      // Set up a fake method invocation that looks like what the method expects
      const invocation = { userId };

      // Run the method with `this` set to the fake invocation
      deleteTask.apply(invocation, [taskId]);

      // Verify that the method does what we expected
      assert.equal(Tasks.find().count(), 0);
      });
   });

    describe('insert', () => {
        beforeEach(() => {
        Tasks.remove({});
        });

      it('can insert owned task', () => {
        const insertTask = Meteor.server.method_handlers['tasks.insert'];
        const invocation = { userId };
        insertTask.apply(invocation, ["pranav"]);
        assert.equal(Tasks.find().count(), 1);
      });
  });


   describe('checked', () => {
      beforeEach(() => {
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: userId,
          username: userName,
        });
      });

      it('can checked owned task', () => {
        const checkedTask = Meteor.server.method_handlers['tasks.setChecked'];
        const invocation = { userId };
        checkedTask.apply(invocation, [taskId, !this.cheked]);
        assert.equal(Tasks.find({checked : true }).count(), 1);
      });
  });

  describe('private', () => {
      beforeEach(() => {
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: userId,
          username: userName,
        });
      });

      it('can setPrivate owned task', () => {
        const setPrivateTask = Meteor.server.method_handlers['tasks.setPrivate'];
        const invocation = { userId };
        setPrivateTask.apply(invocation, [taskId, !this.private]);
        assert.equal(Tasks.find({private : true }).count(), 1);
      });
     });
   });
  });
}
