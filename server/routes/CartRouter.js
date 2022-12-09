const express = require('express')
const  CartRouter = express.Router()
const Cart = require('../model/cartdata')
var objectId = require('mongodb').ObjectID;

CartRouter.post('/add-cart', function (req, res) {
    console.log(req.body);
    var item = {

        product_id:req.body.product_id,
        count:1,
        login_id:req.body.user_id,
      
        
    }
    console.log(item);
    Cart(item).save().then((data) => {
        console.log(data);
        if (data) {
            return res.status(200).json({
                details: data,
                success: true,
                error: false,
                message:"added to cart"
            })

        }
    })
})

CartRouter.get('/view-cart/:id',(req,res)=>{
  const id = req.params.id
    Cart.aggregate([
        {
          '$lookup': {
            'from': 'product_tbs', 
            'localField': 'product_id', 
            'foreignField': '_id', 
            'as': 'product'
          }
        
      },
      {
        "$unwind": "$product"
    },{
        "$group": {
            "_id": "$_id",
            "product_name": { "$first": "$product.product_name" },
            "price": { "$first": "$product.price" },
            "title": { "$first": "$product.title" },
            "description": { "$first": "$product.description" },
            "count": { "$first": "$count" },
           
        }
    }
        
      ]).then((data)=>{
        return res.status(200).json({
            details: data,
            success: true,
            error: false,
            message:"added to cart"
        })
      })
})



module.exports = CartRouter