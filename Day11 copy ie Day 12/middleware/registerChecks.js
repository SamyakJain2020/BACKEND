const {validateEmail,validatePassword}= require('../Utills/Validations');
// LEVEL 1
// email validate - .com ,.co
// pwd validation 
// passwor==con pwd

const registerInitialChecks=(req,res,next)=>{
    const{email,password,confirmPassword}=req.body;
    console.log(email,password,confirmPassword);
    if(typeof(email)==="string" &&
    typeof(password)==="string" &&
    typeof(confirmPassword)==="string" &&
    email.length>0 &&
    password.length>=8 &&
    confirmPassword===password 
    // validateEmail(email) &&
    // validatePassword(password)
    ){
        next();
    }
    else{
        res.status(401).send("INITAIAL CHECKS FAILED");
    }
};
module.exports = registerInitialChecks;

// const { validateEmail, validatePassword } = require("../Utills/Validations");

// const registerChecks = (req, res, next) => {
//   const { email, password, confirmPassword } = req.body;
//   if (
//     typeof email === "string" &&
//     typeof password === "string" &&
//     typeof confirmPassword === "string" &&
//     email.length > 0 &&
//     confirmPassword === password &&
//     validateEmail(email) &&
//     validatePassword(password)
//   ) {
//     next();
//   } else {
//     res.status(401).send("Initial Check Fail");
//   }
// };

// module.exports = registerChecks;