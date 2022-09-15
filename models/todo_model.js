const mongoose = require('mongoose');

//to create the schema model

const todoSchema = new mongoose.Schema({
    task:{
      type:String,
      required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String
    }
});

//now we have to define a collection name for the schema in databases.
const tasks = mongoose.model('tasks',todoSchema);

module.exports = tasks;

