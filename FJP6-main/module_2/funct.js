
// function
// function without parameter

function sayHii(){
    console.log("Hello this is function");
}
sayHii(); // function call




function add(a,b) 
{
    let c=a+b;
    console.log(c);

}
add(10,8)

// function with return type

function multy(m,n)
{
    return m*n;
}
let ans=multy(19,5);
console.log( ans);

// function store in varibale 
// function are first class citizen in js bcz funct can be store in variable

let a=function sub(a,b)
{
    return a-b;
}
console.log(a(10,5))

// evenOdd

function EvnOdd(n)
{
    if(n%2==0)
    {
        console.log(n+ " : is Even");
    }
    else
    console.log(n + " : is Odd");
}
EvnOdd(5);

// IIFE immediately invoked function Expression
(function(){
    console.log("this is iife function");
})();

// iife with parameter
(function(a,b){
    console.log("Divide of "+ a+ " and " + b + " is : "+a/b);

})(10,5);


(function(a,b){
    console.log(a*b);
})(5,7);

