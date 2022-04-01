// make a folder inside same direcotry of this file and in that flder make a text file with content
// new file has been made

// create  a folder

let fs = require("fs");
if(!fs.existsSync("newFolder")){
    fs.mkdirSync("newFolder");
}
let path = require("path");

// create text file

let flpath = path.join(__dirname,"newFolder","newFile.txt");
console.log(flpath);
// write somthing in text file;

fs.writeFileSync(flpath,"new file has been made");

