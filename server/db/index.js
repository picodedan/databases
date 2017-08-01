var Sequelize = require('sequelize');

var orm = new Sequelize('chat', 'root', 'plantlife');

var User = orm.define('User', {
  username: Sequelize.STRING
});

var Room = orm.define('Room', {
  text: Sequelize.STRING
});

var Message = orm.define('Message', {
  text: Sequelize.STRING 
});

User.hasMany(Message);
User.hasMany(Room);

Room.hasMany(Message);
Room.hasMany(User);

Message.belongsTo(User);
Message.belongsTo(Room);

exports.User = User;
exports.Room = Room;
exports.Message = Message;


/*
var mysql = require('mysql');


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
module.exports = mysql.createConnection({
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

*/


