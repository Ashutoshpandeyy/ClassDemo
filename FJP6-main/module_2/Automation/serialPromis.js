
let fs = require("fs");
// let f1promis = fs.promises.readFile("f1.txt");

// f1promis.then(function(data){
//     console.log(data + "");
//     let f2promise = fs.promises.readFile("f2.txt");
//     return f2promise;
// }).then(function(data){
//     console.log(data+"");
// }).catch(function(error){
//     console.log(error);
// })

// 2nd way 

let f1kPromise = fs.promises.readFile("f1.txt");
f1kPromise.then(function(data){
    console.log(data +"");
    f2Promise = fs.promises.readFile("f2.txt");
    return f2Promise;
}).then(function(data){
    console.log(data+"");
    let f3Prmomis = fs.promises.readFile("f3.txt");
    return f3Prmomis;
}).then(function(data){
    console.log(data+"");
}).catch(function(err){
    console.log(err);
})
