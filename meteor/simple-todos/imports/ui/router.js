import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import './body.html';


FlowRouter.route('/', {
   action: function(params, queryParams) {
       BlazeLayout.render("parentTemplate", {top: "head", main:"foot"});
       console.log("completed");
   }
});

FlowRouter.route('/tasks/:taskid', {
   action: function(params, queryParams) {
     BlazeLayout.render("parentTemplate", {top: "subhead", main:"subfoot"});
       console.log(params.taskid);
   }
});
