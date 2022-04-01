// console.log("Jai Shree Ram")

// let inputAry = process.argv;

// let input = inputAry[2];// input take array type 
// console.log(input);


// starting a project
let fs = require("fs");
let path  = require("path")
let flpath = path.join(__dirname,"donload")
// console.log(flpath);

// let folderPath = process.argv[2];
// console.log(folderPath);
let folderExist = fs.existsSync(flpath);

let extensions= {
    Audio:[".mp3"],
    video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpg",".png",],
    Software:[".exe"]
};

if(folderExist){
    // console.log("valid input");
    let files = fs.readdirSync(flpath)
    console.log(files);
    for(let i =0; i<files.length;i++){
        let ext=path.extname(files[i]);
        let nameOfFolder = giveFolderName(ext);
        // console.log("Ext--",ext,"Foldr--",nameOfFolder);
        let pathOfFolder = path.join(flpath,nameOfFolder);// pathfolderr where we want check 
        let exist = fs.existsSync(pathOfFolder);
        if(exist){
            moveFile(flpath,pathOfFolder,files[i]);
        }else{
            fs.mkdirSync(pathOfFolder);// if foldr doesnot exist then creat a folder;
            moveFile(flpath,pathOfFolder,files[i]);
        }
    }
}else{
    console.log("Enter valid path");
}



function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i =0; i<extArr.length;i++){
            if(extArr[i]==ext){
                return key;
            }
        }
    }
    return "Others";
}

function moveFile(flpath,pathOfFolder,fileName){
    let sourcePath = path.join(flpath,fileName);
    let destiPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destiPath);
    fs.unlinkSync(sourcePath);

}


