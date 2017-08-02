import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Tasks = new Mongo.Collection('PlayerDetail');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find();
  });
}

Meteor.methods({
  'tasks.insert'( firstName,lastName,dd,role,birthPlace,totalScore,century,halfCentury,boundry,six) {
    console.log("in meteor method");
  // Make sure the user is logged in before inserting a task
      Tasks.insert({
        FirstName : firstName,
        LastName : lastName,
        DOB :dd,
        Role :role,
        BirthPlace :birthPlace,
        TotalScore : totalScore,
        Century :century,
        HalfCentury : halfCentury,
        boundry : boundry,
        Six :six,
        createdAt: new Date(),
    });
  },

  'tasks.update'(id,firstName,lastName,dd,role,birthPlace,totalScore,century,halfCentury,boundry,six ){
    console.log("in update method");
    Tasks.update({_id:id},
        {$set :
          {
            FirstName : firstName,
            LastName : lastName,
            DOB :dd,
            Role :role,
            BirthPlace :birthPlace,
            TotalScore : totalScore,
            Century :century,
            HalfCentury : halfCentury,
            boundry : boundry,
            Six :six,
            createdAt: new Date(), // current time
          }
        }
      );
  },

  'fetchField'(id){
    return Tasks.findOne({_id:id});
  }
});
