var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    res.redirect('/');
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id;

  burger.updateOne(id, function(result) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
