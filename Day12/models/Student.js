const{DataTypes}=require('sequelize');
const sequelize=require('../database');//index.js is not required;
const User=sequelize.define('User',{
    fullName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    id:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false

    }
});
module.exports=User;