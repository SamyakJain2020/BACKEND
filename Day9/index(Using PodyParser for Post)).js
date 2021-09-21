const express=require('express');
// const bodyParser=require('body-parser');
const app=express();
const PORT = 5000;
app.get("/",(req,res)=>{
    res.send("WLCM");
})

const query=(req,res,next)=>{
    let auth=req.query.auth;
    if(auth=="samyak")
    next();
    else
    {
        res.status(300);
        res.json({"msg":"Autentication failed"});
    }
};

const postQ=(req,res,next)=>{
    let auth=req.body["pass"];
    if(auth=="samyak")
    next();
    else
    {
        res.status(401);
        res.json({"msg":"Autentication failed"});
    }
};
const response=(req,res)=>{
    console.log(`request.body->${req.body}`);
    res.json({"msg":"Authentication Success"});
}
app.use(express.urlencoded());
app.use(express.json({extended:true}));
app.post("/admins",postQ,response);

// const param=(req,res,next)=>{
//     const id=req.params.id;
//     if(id=="123")
//     next();
//     else
//     {
//         res.status(300);
//         res.json({"msg":"Autentication failed"});
//     }
// };
// app.use(param);
// app.get("/admin/user/:id",(req,res)=>{
//     res.send("OK");
// })



app.listen(5000,()=>{
    console.log(`Listening to ${PORT}`)
})