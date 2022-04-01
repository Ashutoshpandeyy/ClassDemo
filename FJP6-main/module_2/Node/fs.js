let fs = require("fs");
// // console.log(fs);

// const { fstat } = require("fs");
let path = require("path");

// //  crud: create read update delete

// let path = require("path");
// let filepath = path.join(__dirname, "file.txt");
// // console.log(filepath);
// // craete file and write text
// //  filepath use for where you want to create a file 
// fs.writeFileSync(filepath, "Hello i am Ashutosh Pandey");

// // read data  from the file
// let cot= fs.readFileSync(filepath,"utf-8");
// console.log(cot);

// // update text in file;
// fs.appendFileSync(filepath, "\njai shree raam \t\n newly updated file")
// console.log(fs.readFileSync(filepath,"utf-8"));


// // Delete file

// fs.unlinkSync(filepath)


// Create Directory

// if(!fs.existsSync("HamariDirectory")){
//     fs.mkdirSync("HamariDirectory");
// }

//  Read Directory

// let FolderPath = __dirname;
// let contentFolder = fs.readdirSync(FolderPath);
// console.log(contentFolder);

//  Delete a Directory

// fs.rmdirSync("HamariDirectory");

// Copy a file

let sourcepath = path.join(__dirname,"file.txt");
let DestinationPath = path.join(__dirname,"file2.txt");
// console.log(sourcepath);
// console.log(DestinationPath);
fs.copyFileSync(sourcepath,DestinationPath);



 