// Given an array ar=[audio,video,image,software,documents,applications,othor]
// make folder for each element in the given array and inside each other make 4 files of that type


let fs = require("fs");
let path = require("path");

let arr = ['Audio', 'video','Software','Documents', 'Application','Others'];
// inside folder create
let nameArr = ['abc','efg','xyz','def']

let extArr= [' .mp3' ,'.mp4', ' .exe',' .pdf',' .apk' ,'.rar']

// craete a folder
let organizePath = path.join(__dirname,"Organise");
if(!fs.existsSync(organizePath)){
    fs.mkdirSync(organizePath);
}
for(let i= 0; i<arr.length; i++){
    let foldpath = path.join(organizePath,arr[i]);
    if(!fs.existsSync(foldpath)){
        fs.mkdirSync(foldpath);
    }
    for(let j=0; j<nameArr.length;j++)
    {
        let fileName = nameArr[j]+extArr[i];
        let filepath = path.join(foldpath,fileName);
        fs.writeFileSync(filepath,"");
    }
}




