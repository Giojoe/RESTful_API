var express = require("express");
var router = express.Router();
//middleware to use for all requests
router.use(function(req,res,next){
    res.contentType("application/json");
    console.log("Something is happening");
    next();
});

//test routes to make sure everything is working
router.get('/', function(req, res) {
  var message = { message: " Hello! welcome to To Do api! " };
    res.json(message.message);
});

var Task = require("./models/task");

router.route("/todotasks")
  //add a task to the list and set the task status

  //view all item in the list
  .get(function(req,res){
    Task.find({},function(err,tasks){
      if(err){
        return res.send(err);
      } else {
        res.json(tasks);
      }
    });
  })

    //add a single task in the list
    .post(function(req,res,next){

    var task = new Task();
    task.name = req.body.name;
    task.description = req.body.description;
    task.status = req.body.status;

    task.save(req.body, function(err,task){
        if(err){
          return res.send(err);
        }
        else {
          res.json("Add new "+ task.name +" Completed");
        }
    });
  })

  //delete a task from the list
  .delete(function(req,res){
    Task.remove(function(err,tasks){
      if(err){
        return res.send(err);
      } else {
        res.json({message:"All task deleted"});
      }
    });
  })

router.route("/todotasks/:task_id")
  //view a single task in the list
  .get(function(req, res) {
        Task.findById(req.params.task_id, function(err, task) {
            if (err){
              return res.send(err);
            } else {
              res.json(task);
            }
        });
    })
  // edit existing task
  .put(function(req, res){
    Task.findByIdAndUpdate(req.params.task_id ,req.body.task, function(err,task){
        if(err){
          res.send(err);
        }
        task.name = req.body.name;
        task.description = req.body.description;
        task.status = req.body.status;
        console.log(task);
        task.save(function(err){
          if(err){
            return res.send(err);
          } else {
            res.json("Edit item "+task.name+" Completed");
          }
        });
    });
  })

  //delete a task from the list
  .delete(function(req,res){
    Task.findByIdAndRemove(req.params.task_id, function(err,task){
        if(err){
          return res.send(err);
        } else {
          res.json("Delete task "+task.name+ " Completed");
        }
    });
  })


  module.exports = router;
