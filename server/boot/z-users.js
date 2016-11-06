module.exports = function(app) {
  var User = app.models.User;
  User.create({email: 'xcojack@gmail.com', password: 'qwe123'}, function (err, userInstance) {
    console.log(userInstance);
  });
};
