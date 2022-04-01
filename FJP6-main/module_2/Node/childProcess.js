let cp=require('child_process');
console.log(cp);
// cp.execFileSync("calc");

//By using  .execSync you can  call another files 
let con= cp.execSync("node test.js");
console.log("output of test.js file : " + con);

console.log(""+con);        