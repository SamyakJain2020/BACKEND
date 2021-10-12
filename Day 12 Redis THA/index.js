const express = require("express");
const app = express();
const {redisClient, redisStore, session } = require("./redis");
app.use(
  session({
    store: new redisStore({ client: redisClient }),
    secret: "secret%123",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 1 * 36000,
    }
  })
);
app.get("/", (req, res) => {
  res.send("<h1> Hello Redis </h1>");
});

app.get('/set', (req, res, next) => {
  const sess = req.session;
  console.log(req.session);
  sess.username = 'Audi'; //in redis->  set username audi
  console.log("Redis Value SET ", sess.username);
  res.status(200).send(sess.username);
});
app.get('/get', (req, res, next) => {
  const sess = req.session;
  console.log("Redis Value GET ", sess.username);
  res.send(sess.username);
});
app.listen(5000, (err) => {
  console.log(`Listening to Port 5000`);
});
