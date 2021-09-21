const express = require("express");
const app = express();
const PORT = 8000;
const check = (req, res, next) => {
  console.log(req.params);
  let isadmin = req.params && req.params.userId;
  //   http://localhost:5000/users/34/books/8989
  if (isadmin == '34') {
      next();
    } else {
        // res.status(400);
        res.send("YOU NEED TO BE ADMIN");
    }
};
app.use('/users/:userId/books/:booksId',check);
// app.get('/',(req,res)=>{
//     res.send("OK");
// })
app.get('/users/:userId/books/:bookId', (req, res) => {
  // res.status(201);
  // res.send("WELCOME")
  res.send(req.params);
});
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});



// var library = [
//   { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
//   { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   },
// ];
// console.log(library.sort((a ,b)=>{return (a.libraryID-b.libraryID)}));

// console.log(library.sort((a ,b)=>{return (a.author>b.author?1:-1)}));
// const person1 = {
//   first: "wes",
//   last: "bos",
//   clothing: {
//     shirts: 10,
//     pants: 2,
//   },
// };

// const person3 = { ...person1 };
// person3.first = "Larry";
// console.log(person3 ,"\n",person1);
// person3.clothing.shirts=100;
// console.log(person3 ,"\n",person1);

// Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
