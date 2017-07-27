//Dependencies
var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    Task       = require("./routes/models/task");

// mongoose.connect("mongodb://localhost/rest_app");
mongoose.connect("mongodb://giojoe:Unmissable38@ds011281.mlab.com:11281/apidemo");

var app = express();
// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

//initialize routes
app.use('/api/v0.1.0', require("./routes/todo_routes"));
app.use(function(req,res){
  res.status(404).json(res.statusCode +" Not found :");
})

//Start the Server
app.listen(process.env.PORT || 3000,function(){
  console.log("Server Started");
});
