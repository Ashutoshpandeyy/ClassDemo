// in javascript execution devided in to two phase first allocate the memory and second run the code
// javaScript synchronus ite means execute sequential and single threading language
//gce (Globakl Execution context) = memoryAllocate +  code execute
// if the function call then again create the execution context
console.log(a);

var a = "hello";

console.log(a);
function fun(){
    var b =29;
    return b;
}

console.log(c);
var c = 30;
var d = fun();
console.log(d)