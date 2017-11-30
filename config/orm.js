// Import MySQL connection.
var connection = require("../config/connection.js");
// Burger.create({
//     name: 'cheese'
// }).then(function(result) {
//     console.log(result);
// }).catch(function(err) {
//     console.log(err);
// })

// var Burger = {
//     burger_name: Sequelize.STRING,
//     devoured: Sequelize.BOOLEAN
//     // Object for all our SQL statement functions.
// }
var orm = {
    selectAll: function(cb) {
        connection.query('SELECT * FROM burgers', function(err, result) {
//            if (err) {
//                throw err;
//            }
            cb(result);
        });
    },
    insertOne: function(burger, cb) {
        connection.query('INSERT INTO burgers SET ?', burger, function(err, result) {
            // if (err) {
            //     throw err;
            // }

            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function(id, cb) {
        connection.query('UPDATE burgers SET devoured = true WHERE id = ?', [id], function(err, result) {
            // if (err) {
            //     throw err;
            // }

            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
