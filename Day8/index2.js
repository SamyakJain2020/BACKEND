// same query browser cache karta hai status get converted 200 to 304
// get ki calls me password nahi bhejte hai  kyuki browser cache karta hai , so we use post call

const express = require('express');
const app = express();
const PORT = 5000;

app.post('/',(req,res)=>{
    console.log(req.body);
    res.json({msg : req.body});
});
app.get('/users/:userID/books/:booksID', (req, res) => {
    console.log(typeof(req.params.userID));
    let str=req.params.userID+" "+req.params.booksID
    res.send(str);
    // res.send();
})

app.listen(PORT,()=>{
    console.log(`Listening at PORT ${PORT}`);
})