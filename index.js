const express = require('express');
const bodyParser = require("body-parser");

const app = express();

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));


//now we require mongoose configurations
const db  = require('./configuration/mongoose');
//require schema model
const tasks = require('./models/todo_model');

//use express router(for every request)
app.use('/', require('./routes/home_routes'));



//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

//to use the static files(css.js etc.)
app.use(express.static('./assets'));


//to listen on the port
app.listen(port,function(err){
    if(err){
        console.log(`There is some error in running the server:${err}`);
    }
    console.log(`Your server is running perfectly on port: ${port}`);
});