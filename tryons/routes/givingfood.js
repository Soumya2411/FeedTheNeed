const express = require('express');
const bodyParser = require('body-parser');
const givingFoodController = require("../controllers/givingFoodController")
const givingFood = express();
givingFood.use(bodyParser.json());
givingFood.use(bodyParser.urlencoded({extended:true}));
givingFood.post('/havesomefood',givingFoodController.givingFoodController);
module.exports = givingFood;