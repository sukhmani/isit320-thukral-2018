//import {Router} from "express";

var express = require("express");
var router = express.Router();

/* Set up a route called api. */
router.get("/api", function(request, response) {
  var message = { result: "success", status: "bar", file: "api.js" };
  console.log("api called:\n" + JSON.stringify(message, null, 4));
  response.send(message);
});

module.exports = router;
