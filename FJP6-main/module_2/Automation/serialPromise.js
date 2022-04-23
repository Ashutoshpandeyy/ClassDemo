let fs = require("fs");
let aryFile = ['./f1.txt','./f2.txt','./f3.txt','./f4.txt'];
//  in  serial promise file will be execute line by line

let filePromise = fs.promises.readFile(aryFile[0]);
for(let i=1; i<aryFile.length; i++){
    filePromise = filePromise.then(function(data){
        console.log(data+"");
        let nextFilePromise = fs.promises.readFile(aryFile[i]);
        return nextFilePromise;
    })
}
filePromise.then(function(data){
    console.log(data+"");
}) 