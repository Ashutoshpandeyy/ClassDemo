//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Vidoe File
//            fsd.jpeg -> print Image File

let fs = require("fs");
let path  = require("path");
let foldpath = path.join(__dirname,"..","Unorganised");

// console.log(foldpath);


let checkFileType={
    ".mp3" : "Audio File",
    ".mp4" : "Video File",
    ".txt" : "Text File"
}

let size = Object.keys(checkFileType).length;
console.log(size);
for(let key in checkFileType ){
    if(fs.existsSync(key)==foldpath){
        console.log(checkFileType[key]);
    }
}