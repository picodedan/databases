var db = require('../db');
var promise = require('bluebird');

var getQuery = {
  m: 'SELECT user.username, chatRoom.roomname, messageTable.text FROM user, chatRoom, messageTable WHERE (messageTable.user_ID = user.id)',
  u: 'SELECT id FROM user WHERE username =',
  r: 'SELECT id FROM chatRoom WHERE roomname ='
};

var postQuery = {
  m: 'INSERT INTO messageTable (id, user_ID, room_ID, messageTable.text) VALUES ',
  u: 'INSERT INTO user (id, username) VALUES ',
  r: 'INSERT INTO chatRoom (id, roomname) VALUES'
};

module.exports = {
  messages: {
    get: function (callback) {

      db.dbConnection.query(getQuery.m, function(error, results, fields) {
        if (error) {
          throw error;
          callback(error);
        }
        callback(results);
        //db.dbConnection.end();
      });
      
       
    }, // a function which produces all the messages
    post: function (msgObj, callback) {
      
      db.dbConnection.query(getQuery.u + 'msgObj.username');
      
      
      db.dbConnection.query(postQuery.m +
        `( ${msgObj.id}, ${msgObj.userId}, ${msgObj.roomId}, ${msgObj.text})`, 
        function(error, results, fields) {
          debugger;
          if (error) { 
            throw error;
            callback(error);
          }
          console.log(results);
          callback(results);
          db.dbConnection.end();
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.dbConnection.query(getQuery.u, function(error, results, fields) {
        if (error) {
          throw error;
        }
        console.log(results);
        callback(results);
        db.dbConnection.end(); 
      });
      
    },
    post: function (userObj, callback) {
      db.dbConnection.query(postQuery.u +
        `( ${userObj.id}, ${userObj.username})`, 
        function(error, results, fields) {
          if (error) { 
            throw error;
            callback(error);
          }
          console.log(results);
          callback(results);
          db.dbConnection.end();
        });
    } // a function which can be used to insert a message into the database
  },
  
  room: {
    // Ditto as above.
    get: function (callback) {
      db.dbConnection.query(getQuery.r, function(error, results, fields) {
        if (error) {
          throw error;
        }
        console.log(results);
        callback(results);
        db.dbConnection.end(); 
      });
      
    },
    post: function (msgObj, callback) {
      db.dbConnection.query(postQuery.r +
        `( ${msgObj.id}, ${msgObj.roomname})`, 
        function(error, results, fields) {
          if (error) { 
            throw error;
            callback(error);
          }
          console.log(results);
          callback(results);
          db.dbConnection.end();
        });
    } // a function which can be used to insert a message into the database
  }
};



/*
connection.query('obj, function (error, results, fields) {
  // error will be an Error if one occurred during the query 
  // results will contain the results of the query 
  // fields will contain information about the returned results fields (if any) 
});
*/