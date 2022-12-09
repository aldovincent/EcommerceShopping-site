const express = require('express')
const  ProductRouter = express.Router()
const product = require('../model/productdata')
const multer = require("multer")
const { Router } = require('express')

var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"../client/public/Assets")
    },
    filename: function(req,file,cb){
        cb(null,req.file.filename)
    }
})

var  upload = multer({ storage: storage})

ProductRouter.post('/upload',upload.single("image"),(req,res) =>{
    return res.json("file uploaded")
})

ProductRouter.post('/add-product' ,function (req, res) {
    console.log(req.body);
    var item = {
        product_name: req.body.productname,
        product_image: req.body.image,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
        quantity: req.body.quantity,
        
    }
    console.log(item);
    product(item).save().then((data) => {
        console.log(data);
        if (data) {
            return res.status(200).json({
                details: data,
                success: true,
                error: false,
                message:" product added"
            })

        }
    })
})



module.exports = ProductRouter