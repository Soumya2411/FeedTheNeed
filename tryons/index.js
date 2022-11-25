const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3005  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/NightHawk')
var db=mongoose.connection;

const givingFood = require('./routes/givingfood')
app.use('/api',givingFood)
const gettingFood = require('./routes/getsomefood')
app.use('/api',gettingFood)
app.use(express.json());
app.get('/', (req, res) => {
  res.redirect('tryons/public/shopinfo.html')
})
app.post('/shop_info', function(req,res){
    var ShopName = req.body.Shopname;
    var Locality =req.body.Locality;
    var area = req.body.area;
    var City =req.body.City;
    var Pincode =req.body.Pincode;
    var State =req.body.State;
    var Landmark=req.body,Landmark;


    var data = {
        "ShopName":ShopName,
        "Locality":Locality,
        "area":area,
        "City":City,
        "PinCode":Pincode,
        "State":State,
        "Landmark":Landmark
    }
    db.collection('shopinfo').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
          
    return res.redirect('');
})
app.get('/',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
    });
return res.redirect('./public/Components/template/index.html');
}).listen(3000)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))