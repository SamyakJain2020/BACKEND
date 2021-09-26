// const fs = require("fs");
// const mini = require('minimist');
// const opts = mini(process.argv.slice(2));
// // console.log(opts);

// if(opts.dirname){ //make directory
// fs.mkdirSync(opts.dirname);
// }
// if(opts.fname){ //write to file 
// fs.writeFileSync(""+opts.fname,"hello how are you all ");
// }
// if(opts.fname && opts.append ){ //append to file
// fs.appendFileSync(""+opts.fname,"\n Welcome to our Learning Channel");
// }
// if(opts.fname && opts.read ){ // read from file
// const n= fs.readFileSync(""+opts.fname,"utf-8");
// console.log(n);
// }
// if(opts.fname && opts.del){ //delete the file and directory
// fs.unlinkSync(""+opts.fname);
// // fs.rmdirSync("THA5");
// }
// // ************* To Execute this file use below commands ***************************
// // >npm install --save minimist
// // >node CRUD_CLI.js --dirname THA5
// // >node CRUD_CLI.js --fname hello.txt
// // >node CRUD_CLI.js --fname hello.txt -append
// // >node CRUD_CLI.js --fname hello.txt -read 
// // >node CRUD_CLI.js --fname hello.txt -del 
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1); 
}