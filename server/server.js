const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/random", function(req, res) {
  axios
    .get("https://random-quote-generator.herokuapp.com/api/quotes/random")
    .then(data => res.send(data.request.res.responseUrl))
    .catch(err => console.log(err));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
