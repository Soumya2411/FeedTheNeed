const express = require('express');
const bodyParser = require('body-parser');
const gettingFoodController = require("../controllers/getingfoodcontroller")
const gettingFood = express();
gettingFood.use(bodyParser.json());
gettingFood.use(bodyParser.urlencoded({extended:true}));
gettingFood.post('/givesomefood',gettingFoodController.gettingFoodController);
module.exports = gettingFood;