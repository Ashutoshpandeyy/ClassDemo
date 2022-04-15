
let fs = require("fs");
let f1promis = fs.promises.readFile("f1.txt");

f1promis.then(function(data){
    console.log(data + "");
    let f2promise = fs.promises.readFile("f2.txt");
    return f2promise;
}).then(function(data){
    console.log(data+"");
}).catch(function(error){
    console.log(error);
})