const { error } = require("console");

fs = require("fs");
let flepromis = fs.promises.readFile("ab.txt");
console.log(flepromis+"");

flepromis.then(function(data){
    console.log(data+" ");
})
flepromis.catch(function(error){
    console.log(error);
})