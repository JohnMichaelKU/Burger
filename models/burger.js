// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(burgers) {
      cb(burgers);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(name, cb) {
    var burger = { burger_name: name };

    orm.insertOne(burger, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne(id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
