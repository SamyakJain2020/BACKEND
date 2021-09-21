const express=require('express');
const app=express();
const PORT=5000;
const check=(req,res,next)=>{
    let isadmin=req.query.a;
    // http://localhost:5000/admin/?a=1234
    if(isadmin=='12345')
    {
        next();
    }
    else{
        res.status(404);
        res.send("YOU NEED TO BE ADMIN");
    }
}
app.use(check);
app.get("/admin",(req,res)=>{
    // res.status(201);
    res.json(req.query);
})

app.get("/change",(req,res)=>{
    // res.status(201);
    res.json(req.query);
})

app.get("/password",(req,res)=>{
    // res.status(201);
    res.json(req.query);
})
app.listen(PORT,()=>{
console.log(`Listening to ${PORT}`);
})

