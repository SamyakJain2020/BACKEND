var express = require('express');
var path = require('path');
const cors = require('cors');
var cookieParser = require('cookie-parser');
require('dotenv').config({path: './config/config.env'});
const PORT = process.env.PORT||8080;
const {sequelize} = require('./models');

//IMPORT ROUTES
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');`

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//???
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//???

//for JWT
app.use(cookieParser());
app.use(cors());

//body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("hello");
})
//ROUTES
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
    console.log(`Listening at PORT:${PORT}`);
    sequelize.authenticate();
    console.log("DB Connected"  );
  });