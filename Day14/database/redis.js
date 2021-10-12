// making Connection to redis 
const redis =require('redis');
const connectRedis=require('connect-redis');
const session = require('express-session')

const redisStore=connectRedis(session);
const redisClient=redis.createClient(
    {host:"localHost",
    port:6379
})
redisClient.on('error',function(err){
    console.log(`could not connect to redis ${err}`);
})
redisClient.on('connect',function(){
console.log("connected to redis");  
})
module.exports={
    redisClient,
    redisStore,
    session
}