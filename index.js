const express=require('express');
const reqFilter=require('./middleware/middleware');
const route= express.Router();
const app=express();



route.use(reqFilter);
//app.use(reqFilter); //application level middleware
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Home page!</h1>'); // route level middleware
});

route.get('/user',(req,res)=>{
    res.send('<h1>Welcome to user page!</h1>');
});

route.get('/help',(req,res)=>{
    res.send('<h1>Welcome to help page!</h1>');
});
app.get('/about',(req,res)=>{
    res.send('<h1>Welcome to about page!</h1>');
});

app.use('/',route);

app.listen(5000);