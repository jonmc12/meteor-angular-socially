Meteor.publish("users", function () {
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});

Meteor.methods({
  testPath: function() {
    console.log(path);
  }
});