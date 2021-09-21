const express=require('express');
const path=require('path');
const app=express();
const PORT = 5000;
console.log(__dirname);
// app.get("/",(req,res)=>{
//     res.send("WLCM");
// })
app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname+"/FINAL450.xlsx"),"index.html");
})
app.listen(5000,()=>{
    console.log(`Listening to ${PORT}`)
})