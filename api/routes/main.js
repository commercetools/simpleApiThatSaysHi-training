'use strict';
module.exports = function(app) {
  var mainApplication = require('../controllers/main');

  // todoList Routes
  app.route('/sayhi')
    .get(mainApplication.sayhi);

  app.get("/", (req, res) => {
      res.send("Welcome to a basic express App");
    });


  };
