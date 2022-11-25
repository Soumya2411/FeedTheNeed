
const foodGiver = require('../model/foodGiver')

const gettingFoodController = async (req,res)=>{
    const user = await foodGiver.findOne({
        userName:req.body.userName
    })
    console.log(user,req.userName);
    res.send(user);
}
module.exports = {
    gettingFoodController    
}