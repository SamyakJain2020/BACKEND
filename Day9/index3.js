const express=require('express');
const path=require('path');
const app=express();
const PORT = 5000;
app.set("views",path.join(__dirname,"views"));
app.set("view engine","jade");//npm i -s jade   
console.log(__dirname);
// app.get("/",(req,res)=>{
//     res.send("WLCM");
// })

app.use('/',(req,res)=>{
    // res.sendFile(path.join(__dirname+"/FINAL450.xlsx"),"index.html");
    res.render('index',{title:"Express"});
})
app.listen(5000,()=>{
    console.log(`Listening to ${PORT}`)
})