var mongoose=require('mongoose');
var mongodb='mongodb://localhost:27017/Day14_DataBase';
// is DB not exists then it creates it 
mongoose.connect(mongodb,{useNewUrlParser:true, useUnifiedTopology:true});//came is the procedure for any db 
var db=mongoose.connection;
db.on('error',console.error.bind(console,"MongoDB Connection Error"));