const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const  AddRouter =require('../server/routes/AddRouter')
const  UserRouter =require('../server/routes/UserRouter')
const  ProductRouter =require('../server/routes/ProductRouter')
const  CartRouter =require('../server/routes/CartRouter')
const  LoginRouter =require('../server/routes/LoginRouter')
const  OrderRouter =require('../server/routes/OrderRouter')
const  singleproductRouter =require('../server/routes/SingleproductRoute')
const  CartremoveRouter =require('../server/routes/CartremoveRouter')
const viewproductRouter =require('../server/routes/viewRouter')
app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json()) 
app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use('/add',AddRouter)
app.use('/product',ProductRouter)
app.use('/cart',CartRouter)
app.use('/user',UserRouter)
app.use('/log',LoginRouter)
app.use('/order',OrderRouter)
app.use('/cartremove',CartremoveRouter)
app.use('/singleprod',singleproductRouter)
app.use('/view',viewproductRouter)

app.listen(2000,()=>console.log("server started"))