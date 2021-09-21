const express = require("express");
const app = express();
const PORT = 8000;

app.get('/',(req,res)=>{
    res.send("OK");
})
app.get('/users/:userId/books/:bookId',(req, res, next) => {
  console.log(req.params);
  let isadmin = req.params && req.params.userId;
//   http://localhost:5000/users/34/books/8989
  if (isadmin == '34') {
      next();
} else {
    res.status(400);
    res.send("YOU NEED TO BE ADMIN");
}
}, (req, res) => {
  // res.status(201);
  // res.send("WELCOME")
  res.send(req.params);
});
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
//WOKING