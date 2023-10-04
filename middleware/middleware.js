module.exports=reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('Please enter your age!');
    }else if(req.query.age<18){
        res.send('You can not access this page because your age is not above 18!');
    }
    else{
        next();
    }
    
}