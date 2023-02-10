const express = require('express');
const router = express.Router();
const{Product} = require('../models/product');
const mongoose = require('mongoose');

router.get(`/`, async (req,res)=>{
    const productList = await Product.find();
    if(!productList){
     res.status(500).json({success: false})
    }
    res.send(productList);
 })
 ///////
 router.post(`/`,(req,res)=>{
    const product = new Product({
     title:req.body.title,
     imageUrl:req.body.imageUrl,
    description:req.body. description,
    storeId:req.body.storeId,
    price:req.body.price,
    quantity:req.body.quantity,
    category:req.body.category,
    }) 
   product.save()
   .then((createProduct=>{res.status(201).json(createProduct)}))
     .catch((err)=>{res.status(500).json({
        error:err,
        success: false,
 
     })})
   })

   module.exports =router;