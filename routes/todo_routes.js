var express = require("express");
var router = express.Router();
//middleware to use for all requests
router.use((req, res, next) => {
    res.contentType("application/json");
    console.log("Something is happening");
    next();
});

//test routes to make sure everything is working
router.get('/', (req, res) => {
  var message = { message: " Hello! welcome to To Do api! " };
    res.json(message.message);
});

var Task = require("./models/task");

router.route("/todotasks")
  //add a task to the list and set the task status

  //view all item in the list
  .get((req, res) => {
    Task.find({}, (err,tasks) => {
      if(err) {
        return res.send(err);
      } else {
        res.json(tasks);
      }
    });
  })

    //add a single task in the list
    .post((req, res) => {
      Task.create(req.body, (err, task) => {
          if(err) {
            return res.send(err);
          }
          else {
            res.json("Add new "+ task.name +" Completed");
          }
      });
  })

  //delete a task from the list
  .delete((req, res) => {
    Task.remove((err, tasks) => {
      if(err) {
        return res.send(err);
      } else {
        res.json({message:"All task deleted"});
      }
    });
  })

router.route("/todotasks/:task_id")
  //view a single task in the list
  .get((req, res) => {
        Task.findById(req.params.task_id, (err, task) => {
            if (err) {
              return res.send(err);
            } else {
              res.json(task);
            }
        });
    })
  // edit existing task
  .put((req, res) => {
    Task.findByIdAndUpdate(req.params.task_id ,req.body.task, (err, task) => {
        if(err){
          res.send(err);
        }
        task.name = req.body.name;
        task.description = req.body.description;
        task.status = req.body.status;
        console.log(task);
        task.save((err) => {
          if(err){
            return res.send(err);
          } else {
            res.json("Edit item "+task.name+" Completed");
          }
        });
    });
  })

  //delete a task from the list
  .delete((req,res) => {
    Task.findByIdAndRemove(req.params.task_id, (err,task) => {
        if(err){
          return res.send(err);
        } else {
          res.json("Delete task "+task.name+ " Completed");
        }
    });
  })


  module.exports = router;
