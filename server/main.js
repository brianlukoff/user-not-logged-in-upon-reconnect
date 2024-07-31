import { Meteor } from 'meteor/meteor';

Meteor.startup(async () => {
  if (!(await Accounts.findUserByUsername('test'))) {
    Accounts.createUserAsync({ username: 'test', password: 'test' });
    console.log('created user');
  } else {
    console.log('user exists');
  }
});

Meteor.publish('user', async function() {
  console.log('user = ' + this.userId);
});