var models = require('../models');


var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get(function (err, results) {
        var data = {
          results: results
        };
        res.json(data);
      });
      
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      var postData = [];//[req.body[text], req.body[username], req.body[roomname]];
      console.log(req.body);
      models.messages.post(postData, function(err, results) {
        res.json(results);
      });
    },
    options: function (req, res) {
      res.writeHead(201, headers);
      res.end(); 
    } 
  },

  users: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.users.get(function (err, results) {
        console.log(res);
        //format results?
        res.json(results);
      });
      
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      var postData = [req.body[username]];
      models.users.post(postData, function(err, results) {
        res.json(results);
      });
    },
    options: function (req, res) {
      res.writeHead(201, headers);
      res.end(); 
    } 
  }, 
  //sequelize version
  sMessages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get(function (err, results) {
        var data = {
          results: results
        };
        res.json(data);
      });
      
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      var postData = [];//[req.body[text], req.body[username], req.body[roomname]];
      console.log(req.body);
      models.messages.post(postData, function(err, results) {
        res.json(results);
      });
    },
    options: function (req, res) {
      res.writeHead(201, headers);
      res.end(); 
    }
    
  },
  sUsers: {
    get: function (req, res) { // a function which handles a get request for all messages
      Message.findAll({ include: [User], include: [Room] })  //sequelize syntax check
        .complete((err, results) => {
          res.json(results);
        });
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      var postData = [req.body[username]];
      models.users.post(postData, function(err, results) {
        res.json(results);
      });
    },
    options: function (req, res) {
      res.writeHead(201, headers);
      res.end(); 
    }
    
  }

};



