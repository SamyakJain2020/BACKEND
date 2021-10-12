const User=require('../models/mongo');
const bcrypt = require('bcrypt');
const saltRounds=10;
const register=async(req,res,next)=>{
const {email,password}=req.body;
try {
    const alreadyExists = await User.findOne({where:{email}}).exec();
    if(alreadyExists){
        res.status(401).send("Email Already Exists");
    } 
    else{
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const newUser=new User({email:email.toLowerCase(),password:hash,name="Samyak"})
        const savedUser=await newUser.save();
        res.status(201).send(savedUser);
    }
} catch (error) {
    console.log(error);
    res.status(500).send("Something Went Wrong");
}
};

const registerSuperAdmin=async(req,res,next)=>{
    const {email,password}=req.body;
    try {
        const alreadyExists = await User.findOne({where:{email}}).exec();
        if(alreadyExists){
            res.status(401).send("Email Already Exists");
        } 
        else{
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);
            const newUser=new User({email:email.toLowerCase(), password:hash, name:"samyak" , role='superAdmin'})
            const savedUser=await newUser.save();
            res.status(201).send(savedUser);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Something Went Wrong");
    }
    };
module.exports={register,registerSuperAdmin};