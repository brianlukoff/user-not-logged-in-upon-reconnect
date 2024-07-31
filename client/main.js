import { Template } from 'meteor/templating';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  this.autorun(() => {
    this.subscribe('user');
  });
});

Template.hello.helpers({
  userInfo() {
    return JSON.stringify(Meteor.user())
  }
});

Template.hello.events({
  'click button'(event, instance) {
    Meteor.loginWithPassword('test', 'test');
  },
});
