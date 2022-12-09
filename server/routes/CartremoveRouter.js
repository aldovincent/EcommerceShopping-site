const { Router } = require('express');
const express = require('express');
const { Schema } = require('mongoose');
const  CartremoveRouter = express.Router()
const Cartremove = require('../model/cartdata')

CartremoveRouter.get("/item/:id",((req,res)=>{
    const id=req.params.id
    console.log(id);
    Cartremove.deleteOne({_id:id})
      .then(()=>{
        res.status(200).json({
            success:true,
            error:false,
            message:'deleted!'
        })

      })

}))
module.exports = CartremoveRouter