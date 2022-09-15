const express = require('express');

var router = express.Router();

// require the home controller file
const homeController = require('../controllers/home_controller');

//home route
router.get('/',homeController.home);

//add-task route 
router.post('/add-task',homeController.add);

//delete-task route
router.get('/delete-task',homeController.delete);


module.exports = router;