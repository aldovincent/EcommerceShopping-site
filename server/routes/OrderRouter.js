const express = require('express')
const OrderRouter = express.Router()
const Order = require('../model/orderdata')

OrderRouter.post('/add-order', function (req, res) {
    console.log(req.body);
    var item = {
      order_status:req.body.order_status
        
    }
    console.log(item);
    Order(item).save().then((data) => {
        console.log(data);
        if (data) {
            return res.status(200).json({
                details: data,
                success: true,
                error: false,
                message:"order added"
            })

        }
    })

})
module.exports = OrderRouter