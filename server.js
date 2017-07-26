
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static("public"));
mongoose.Promise = Promise;

app.use(bodyParser.urlencoded({
    extended: false
}));

mongoose.connect('mongodb://heroku_sqkgz5tt:ip2v9udgdsh50h4hrfo2qbk9r7@ds137207.mlab.com:37207/heroku_sqkgz5tt');
var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

app.listen(port, function (req) {
    console.log("listening on port", port);
});


// ------------ ROUTES  ----------------------- //

app.get('/scrap', function (req, res) {



});