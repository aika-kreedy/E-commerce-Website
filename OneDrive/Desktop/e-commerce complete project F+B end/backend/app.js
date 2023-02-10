const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');


require('dotenv').config();
const api = process.env.API_URL;
const productsRouter = require('./routers/products')

//middleware 
app.use(bodyParser.json()); 
app.use(morgan("tiny"));
//routers
app.use(`${api}/products`,productsRouter);








   

mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'ecommerce-database'
})

.then(()=>{
    console.log('database connecting already.... ')
})
.catch((err)=>{console.log(err)})



app.listen(3000, ()=>{
    console.log("heloooooooo");
})
 