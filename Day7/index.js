const express=require("express");
const app = express()
// in backend consider 3 conditions (security, preformence, edge cases)
app.get("/",(req,res)=>{
    res.send("You are in Slash");
})

app.get("/samyak",(req,res)=>{
    res.send("You are in Samyak jain");
});

const sam=(req,res)=>{
    res.send("You are in Sam");
};
app.get("/sam",sam)

const crud=(req,res)=>{
    res.send("You are in CRUD")
}

app.get("/CRUD",crud);
// When you are in website you are only getting use postman for rest
app.post("/CRUD",crud);
app.put("/CRUD",crud);
app.delete("/CRUD",crud);


const jsn =(req,res)=>{
    res.send({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    })

}
app.get("/json",jsn);

const statusCode =(req,res)=>{
    // res.status(201);//send Status (do it before app.send)
    res.send();
    // OR
    // res.status(500).send("INternal server error has occured")
}
app.get("/statusCode",statusCode);



const query=(req,res)=>{
// http://localhost:5000/query?name=samyak&dob=19/04/2002&id=23134
res.send(req.query);
// res.send(req.query.name);
// res.send(req.query.dob);
// res.send(req.query.id);
}
app.get("/query",query);

// Note : You can apply regx commands in app.get("URL") in here


const user=(req,res)=>{
    // res.status(203);
    res.send(req.params.name)
}
app.get("/u/:name",user);


app.listen(3000,(err)=>{
    //after it listedns 500 this exectes
    console.error(`Listening to 3000`);
});
// CRUD->POST GET DELETE UPDATE
