const express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send({ response: "Sample response from web application" });
});

app.get("/path1", (req, res) => {
  res.send({ response: "Sample response from web application path 1" });
});

app.get("/path2", (req, res) => {
  res.send({ response: "Sample response from web application path 2" });
});

app.listen("5000", (req, res) => {
  console.log("running on 5000");
});
