const foodGiver = require('../model/foodGiver')

const givingFoodController = async (req,res)=>{
    try{
        
        const foodGiverData = foodGiver.findOne({userName:"qmint"})
        // if(foodGiverData)
        // {
            // console.log(foodGiverData);
            // res.status(200).send({success:false,msg:"cannot create more than one request at a time"})
        // }
        // else{
             const foodGiverNew = new foodGiver({
                userName: req.body.userName,
                Name: req.body.name,
                email:req.body.email,
                mobile:req.body.mobile,
                Longitude:req.body.longitude,
                Latitude:req.body.longitude,
             });
             const result = await foodGiverNew.save();
             res.status(200).send({success:true,msg:"Request Posted"})
        // }

    }catch(err)
    {
        res.status(400).send(err.message);
    }   
}
module.exports = {
    givingFoodController    
}