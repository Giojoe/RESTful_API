//Dependencies
var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    Task       = require("./routes/models/task");

var app = express();
var todoRoutes = require("./routes/todo_routes");
// mongoose.connect("mongodb://localhost/rest_app");
mongoose.connect("mongodb://joe:56010163@ds011281.mlab.com:11281/apidemo");


// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

//initialize routes
app.use('/api/v0.1.0', require("./routes/todo_routes"));
app.use(function(req,res){
  res.status(404).json(res.statusCode +" Not found :");
})

//Start the Server
app.listen(process.env.PORT || 3000,function(){
  console.log("Server Started");
});
