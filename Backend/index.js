const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express();
const signup=require('./signup')
const loginroute=require('./login')
const useraccountroute=require('./account')
const addtocartrouter=require('./addtocart')
app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())
app.use(
    cors({
      origin: 'http://localhost:5173',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      exposedHeaders: ['Content-Type', 'Authorization', 'XMLHttpRequest'],
      credentials: true, // Allow credentials
    })
  );
  
app.use(signup)
app.use(loginroute)
app.use(useraccountroute)
app.use(addtocartrouter)

app.listen(5000,()=>{
    console.log(`app is ruuning`)
})