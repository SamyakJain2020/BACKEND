// const express=require("express");
// const app = express()
// // in backend consider 3 conditions (security, preformence, edge cases)

// const checkAdmin=(req,res,next)=>{
//     console.log(req.query);
//     if(req.query.admin==='true')
//     next();
//     else if (req.query.admin)
//     {res.status(400).send("Should be a admin to access this");}
// };

// const sendRes=(req,res)=>{

//     res.status(200);
//     res.send(" welcome Admin .You are in Slash ");
//     // res.send(req)
// }

// app.use(checkAdmin);

// app.get("/admin/a",sendRes);
// app.get("/admin/b",sendRes);
// app.get("/admin/c",sendRes);

// app.listen(5000,(err)=>{
//     //after it listedns 500 this exectes
//     console.error("err");
// });

// const express=require('express');
// const app=express();
// const PORT=5000;
// const check=(req,res,next)=>{
//     let isadmin=req.query.a;
//     // http://localhost:5000/admin/?a=1234
//     if(isadmin=='12345')
//     {
//         next();
//     }
//     else{
//         res.status(404);
//         res.send("YOU NEED TO BE ADMIN");
//     }
// }
// app.get("/admin",check,(req,res)=>{
//     // res.status(201);
//     res.json(req.query);
// })
// app.listen(PORT,()=>{
// console.log(`Listening to ${PORT}`);
// })

// const express=require('express');
// const app=express();
// const PORT=5000;
// const check=(req,res,next)=>{
//     let isadmin=req.query.a;
//     // http://localhost:5000/admin/?a=1234
//     if(isadmin=='12345')
//     {
//         next();
//     }
//     else{
//         res.status(404);
//         res.send("YOU NEED TO BE ADMIN");
//     }
// }
// app.use(check);
// app.get("/admin",(req,res)=>{
//     // res.status(201);
//     res.json(req.query);
// })

// app.get("/change",(req,res)=>{
//     // res.status(201);
//     res.json(req.query);
// })

// app.get("/password",(req,res)=>{
//     // res.status(201);
//     res.json(req.query);
// })
// app.listen(PORT,()=>{
// console.log(`Listening to ${PORT}`);
// })

// const express = require("express");
// const app = express();
// const PORT = 5000;
// const check = (req, res, next) => {
//   console.log(req.params);
//   let isadmin = req.params && req.params.userId;

//   if (isadmin == '34') {
//     next();
//   } else {
//     res.status(400);
//     // res.send("YOU NEED TO BE ADMIN");
//   }
// };
// app.use(check);
// app.get('/users/:userId/books/:bookId', (req, res) => {
//   // res.status(201);
//   // res.send("WELCOME")
//   res.json(req.params);
// });
// app.listen(PORT, () => {
//   console.log(`Listening to ${PORT}`);
// });

const express = require('express');
const app = express();
const PORT = 5000;

//middleware in node
app.get('/api/email/:emailId/password/:userPassword',(req, res, next)=>{
    console.log(req.params);
    let email =  req.params && req.params.emailId;
    let password = req.params && req.params.userPassword;
    if((!email.includes('@'))  || (!password.includes('+'))) {
        res.json({msg : "Invalid Params"});
    }
    next();
},(req, res)=>{
    res.status(200);
    res.send({"msg" : "email and password are valid"});
});

//check is admin
app.get('/api/isAdmin',(req,res,next)=>{
    const isAdmin = req.query.admin;
    if(!isAdmin || isAdmin === 'false'){
        res.status(401);
        return res.json({msg : "Unauthorized"});
    }
    next();
}, (req, res)=>{
    res.sendStatus(200, {msg : "you can acees this route"});
});

app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`);
})