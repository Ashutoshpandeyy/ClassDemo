// move a file;

let fs = require("fs");
let path = require("path");

let srcpth = path.join(__dirname ,"newFolder","newFile.txt");
console.log(srcpth);

let destPth = path.join(__dirname,"Organise","newFile.txt")

console.log(destPth);
fs.unlinkSync(srcpth);