const express = require('express')
const  UserRouter = express.Router()
const User = require('../model/userdata')

UserRouter.post('/add-user', function (req, res) {
    console.log(req.body);
    var item = {
    
      name:req.body.name,
      mobile:req.body.mobile,
      address:req.body.address,
      email:req.body.email,

        
      
        
    }
    console.log(item);
    User(item).save().then((data) => {
        console.log(data);
        if (data) {
            return res.status(200).json({
                details: data,
                success: true,
                error: false,
                message:"user registered"
            })

        }
    })
})
module.exports = UserRouter;