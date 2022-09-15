const tasks = require('../models/todo_model');

//to return the home file
module.exports.home = function(request,response){
    
    tasks.find({},function(err,tasks){
        if(err){
        console.log('Error in fetching the data from database');
        return;
        }
        return response.render('home',{
            title:'ToDoList',
            tasks : tasks
        });
    });
};


//to add any task in your todo's

module.exports.add = function(request,response){
    console.log(request.body);
    tasks.create({
        task:request.body.task,
        category:request.body.category,
        date:request.body.date
    },function(err,newTask){
        if (err) {
            console.log('Error in creating a task',err);
            return;
        }
        console.log('*********',newTask);
        return response.redirect('back');
    });
};

// to delete tasks from you todo's

module.exports.delete = function(request,response){
    var id= request.query;
         // to check the number of tasks to be deleted
    var count = Object.keys(id).length;
    for (let i = 0; i < count; i++) {
        //Deleting the task from the database by using their individual ids
        tasks.findByIdAndDelete(Object.keys(id)[i], function(err) {
            if (err) {
                console.log("Error in deleting the task from DB");
            }
        });
        console.log("The task has been deleted!");
    }
    return response.redirect('back');
};

