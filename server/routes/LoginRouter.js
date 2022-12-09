const express = require('express')
const  LoginRouter = express.Router()
const Login = require('../model/logindata')

LoginRouter.post('/login', function (req, res) {
    console.log(req.body);
    var item = {

       username:req.body.username,
       password:req.body.password,
       //role:req.body.role,
      
        
    }
    console.log(item);
    Login.findOne({username:req.body.username}).then((data) => {
        console.log(data);
        if (data) {

            Login.findOne({password:req.body.password}).then((data1) => {
                if (data1) {
                    return res.status(200).json({
                        login_id: data1._id,
                        username:data1.username,
                        success: true,
                        error: false,
                        message:"user logged in"
                    })
                }else{
                    return res.status(400).json({
                        
                        success: false,
                        error: true,
                        message:"password not matching"
                    })
                }
               

            })
            

        }else{
            return res.status(200).json({
                details: data,
                success: true,
                error: false,
                message:"user not found"
            }) 
        }
    })
})
module.exports = LoginRouter