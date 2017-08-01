var db = require('../db');
var promise = require('bluebird');

var getQuery = {
  m: 'SELECT user.username, chatRoom.roomname, messageTable.text \
      FROM user, chatRoom, messageTable \
      WHERE (messageTable.user_ID = user.id & messageTable.room_ID = chatRoom.id)',
  u: 'SELECT * FROM user',
  r: 'SELECT * FROM chatRoom'
};

var postQuery = {
  m: 'INSERT INTO messageTable (text, user_ID, room_ID) \
      VALUES (?, \
      (SELECT id FROM user WHERE username= ?), \
      (SELECT id FROM chatRoom WHERE roomname= ?))',
  u: 'INSERT INTO user (username) VALUES (?)',
  r: 'INSERT INTO chatRoom (roomname) VALUES (?)'
};

module.exports = {
  messages: {
    // Ditto as above.
    get: function (callback) {
      db.query(getQuery.m, function(err, res, f) {
        callback(err, res);
      });
      
    },
    post: function (messageParams, callback) {
      db.query(postQuery.m, messageParams, (err, res) => {
        callback(err, res);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query(getQuery.u, function(err, res, f) {
        callback(err, res);
      });
      
    },
    post: function (userParam, callback) {
      db.query(postQuery, userObj.username, (err, res) => {
        callback(err, res);
      });
    } // a function which can be used to insert a message into the database
  },
  
  room: {
    // Ditto as above.
    get: function (callback) {
      db.query(getQuery.r, function(err, res, f) {
        callback(err, res);
      });
      
    },
    post: function (roomParam, callback) {
      db.query(postQuery.r, roomParam, (err, res) => {
        callback(err, res);
      });
    } // a function which can be used to insert a message into the database
  },
};



/*
connection.query('obj, function (error, results, fields) {
  // error will be an Error if one occurred during the query 
  // results will contain the results of the query 
  // fields will contain information about the returned results fields (if any) 
});
*/