const express = require('express')
const  viewproductRouter = express.Router()
const product = require('../model/productdata')


viewproductRouter.get('/view-products',(req,res) => {
     product.find()
        .then(function(data){
            if(data == 0){
            return res.status(401).json({
                  success:false,
                  error:true,
                  message:"No item Found!"
        })
    }
        else {
            return res.status(200).json({
                success:true,
                error:false,
                data:data,
            })
        }
    })
    
})

module.exports = viewproductRouter