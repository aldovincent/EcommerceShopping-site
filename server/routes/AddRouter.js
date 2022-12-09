const express = require('express')
const   Addrouter = express.Router()
const category = require('../model/categorydata')

Addrouter.post('/add-category', function (req, res) {
    console.log(req.body);
    var item = {
        category_name: req.body.categoryname,
        
    }
    console.log(item);
    category(item).save().then((data) => {
        console.log(data);
        if (data) {
            return res.status(200).json({
                details: data,
                success: true,
                error: false,
                message:" category added"
            })

        }
    })

})
module.exports = Addrouter