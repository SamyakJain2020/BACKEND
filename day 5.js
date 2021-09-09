////////////////////////----------- DAY 5 -- THA ----- CRUD WITH FS MODULE [1] ------------------------------------/////////////////////////


// PS C:\Users\mc\Desktop\Devsnest\THA DAY5> node
// Welcome to Node.js v14.17.5.      
// Type ".help" for more information.


const fs = require('fs');

fs.mkdirSync('new_folder');

fs.writeFileSync('new_folder/good.txt', "Good Evening.. ");

fs.appendFileSync('new_folder/good.txt', " Empire Team!");

const data = fs.readFileSync('new_folder/good.txt', "utf-8");

console.log(data);

fs.renameSync('new_folder/good.txt', 'new_folder/cool.txt');

fs.unlinkSync('new_folder/cool.txt');

fs.rmdirSync('new_folder');

class Test {
    print() {
        console.log("I'm inside require_test");
    }
}
class Test2 {
    print() {
        console.log(">>>>>n");
    }
}

module.exports = Test;
var Test = require("./crud_with_fs_module2");

var obj = new Test();

console.log(obj.print());
