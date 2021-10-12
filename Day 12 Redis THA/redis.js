const redis=require('redis');
const connectRedis=require('connect-redis')
const session=require('express-session');
const redisStore =connectRedis(session);
const redisClient = redis.createClient({
    host:"localhost",
    port:6379
});
redisClient.on('error',function(err){
    console.error(`Could not connect to redis error : ${err}`);
});
redisClient.on('connect',function(){
    console.log(`Connection SuccessFull `);
})
module.exports={
    redisClient,
    redisStore,
    session
}