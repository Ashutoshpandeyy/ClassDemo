
// "C:\Users\ashut\OneDrive\Desktop\fjp\FJP6-main\Node\path.js"
let path = require("path");
// console.log(path);

//  Extension tell us to extension of the file
// let extensioName = path.basename("C:\Users\ashut\OneDrive\Desktop\fjp\FJP6-main\Node\path.js");
// console.log(extensioName);

// let baseName = path.basename("C:\Users\ashut\OneDrive\Desktop\fjp\FJP6-main\Node\path.js");
// console.log(baseName);

// console.log(__dirname); //print directory path
// console.log(__filename); // print file  path

//  join use to join / forward slash or \backward slash according to system need
let dirpath = __dirname
let newFile = path.join(dirpath,  "test.js")
console.log(newFile);




