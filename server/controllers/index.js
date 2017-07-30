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
      res.writeHead(200, headers);
      models.messages.get(function (dbResult) {
        var data = {
          results: dbResult
        };
        res.end(JSON.stringify(data));
      });
      
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      var postData = [];
      debugger;
      req.on('error', (error) => {
        res.writeHead(400, headers);
        res.end();
      }).on('data', (chunk) => {
        res.writeHead(201, headers);
        postData.push(chunk);
        
      }).on('end', () => {
        var message = [].concat(postData).toString();
        var msgObj = JSON.parse(message);
        models.messages.post(msgObj, function(results) {
          res.end();
        });
      });
    },
    options: function (req, res) {
      res.writeHead(201, headers);
      res.end(); 
    } 
  },

  users: {
    get: function (req, res) { // a function which handles a get request for all messages
      res.writeHead(200, headers);
      models.users.get(function (results) {
        console.log(results);
        //format results?
        res.end(results);
      });
      
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      var postData = [];
      req.on('error', (error) => {
        res.writeHead(400, headers);
        res.end();
      }).on('data', (chunk) => {
        res.writeHead(201, headers);
        postData.push(chunk);
        
      }).on('end', () => {
        var userName = [].concat(postData).toString();
        var userObj = JSON.parse(userName);
        models.users.post(userObj, function(results) {
          res.end();
        });
      });
    },
    options: function (req, res) {
      res.writeHead(201, headers);
      res.end(); 
    } 
    
  }

};

