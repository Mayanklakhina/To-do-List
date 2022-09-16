//require the mongoose libarary
const mongoose = require('mongoose');

//to connect the mongoose to the database i.e. mongoDB.
mongoose.connect(process.env.MONGO_URL);

//localhost defines that server data is running on your system and mongodb is the database running 
//on your system and todo_list_db is the name of the database which is of my choice.


//to check if mongoose has been connected successfully to the database or not.
const db = mongoose.connection;

//if there is any error, do this..
db.on('error',console.error.bind(console,'There is some error in connecting the mongoose to the database.'));

//If its up and running, so do this..
db.once('open',function(){
    console.log('Mongoose has been connected to the database successfully.')
})


