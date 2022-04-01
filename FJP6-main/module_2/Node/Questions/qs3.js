// Copy index.html file from module1 to a folder inside having name .html

let fs= require("fs");
let path = require("path");

let srcepath=path.join(__dirname,"..","..","module1","index.html");

// console.log(srcepath);
let destpath = path.join(__dirname,"..","..","module_2","index.html");


// console.log(destpath);
fs.copyFileSync(srcepath,destpath);