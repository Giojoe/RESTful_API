var mongoose = require("mongoose");
//Schema Setup
var taskSchema = new mongoose.Schema({
  name:String,
  description:String,
  status:{
    type:[{
      type:String,
      levels:["pending","done"]
    }],
    default:["pending"]
  }
},{ versionKey:false });

//export
module.exports = mongoose.model('Task',taskSchema);
