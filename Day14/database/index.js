const {Sequelize}=require('sequelize');
// Sequelize is an ORM which can connect to all the database
const{
    sequelize_database,
    sequelize_username,
    sequelize_password,
    sequelize_host,
    sequelize_dialect,
} =require('../config')
const sequelize=new Sequelize(
    // "postgres",
    // "postgres",
    // "123456789",
    // {
    //     host:"localhost",   
    //     dialect:"postgres"
    // }

    sequelize_database,
    sequelize_username,
    sequelize_password,
   {
       host: sequelize_host,
        dialect: sequelize_dialect
   }
);
sequelize.sync();

(async()=>{

    try {
        await sequelize.authenticate();
        console.log("Connection Established With DB");
    } catch (error) {
        console.error("Unable to connect to DB");
    }
})();
module.exports=sequelize;