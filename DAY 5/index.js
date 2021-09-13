const fs = require("fs");
const mini = require('minimist');
const opts = mini(process.argv.slice(2));
console.log(opts);

if(opts.dirname){ //make directory
fs.mkdir(opts.dirname,(err)=>{
    console.log("Dir Is already Present");
});
}

if(opts.fname && opts.write){ //write to file 
fs.writeFile(opts.dirname+"/"+opts.fname,opts.write,(err)=>{
    console.log("File not present");
});
}
if(opts.fname && opts.append ){ //append to file
fs.appendFile(opts.dirname+"/"+opts.fname,"\n"+opts.append,(err)=>{
    console.log("Cannot append File");
});
}
if(opts.fname && opts.read ){ // read from file
fs.readFile(opts.dirname+"/"+opts.fname,"utf-8",(err,data)=>{
    console.log(data);
    if(err)console.log("Unable to read File ");
});
}
if(opts.fname && opts.del){ //delete the file and directory
fs.unlink(opts.dirname+"/"+opts.fname,(err)=>{
    console.log("Unable to Unlink File")
});
fs.rmdir(opts.dirname,(err)=>{
    console.log("Unable to remove Dir");
});
}
// ************* To Execute this file use below commands ***************************
// >npm install --save minimist
// >node CRUD_CLI.js --dirname THA5
// >node CRUD_CLI.js --fname hello.txt --write "Sample text"
// >node CRUD_CLI.js --fname hello.txt --append "mytext"
// >node CRUD_CLI.js --fname hello.txt -read 
// >node CRUD_CLI.js --fname hello.txt -del 