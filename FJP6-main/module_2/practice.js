// // comment in java script

// let a=29; // Declare varibale  storing value with Assignment operator
// let b=a; //assignig valur one varibale to to anthore variable
// let s="string"//declaring string

// // let , var ,const
// // let -> let work with  in the block
// // const -> const work with  in the block const varibale always be unique
// // var -> var work with in the function

// const k=5;
// let c=a+k;
// console.log(c);

// let sub=a-k;
// console.log(sub);

// let mul=a*k;
// console.log(mul);
// let i=4;
// i++; //post Increment
// console.log(i);

// ++i; //pre Increment
// console.log(i);

// i--; //post Decrement
// console.log(i)

// --i; // pre Decrement
// console.log(i);

// let dc=18.5;
// let dk=2.5;

// let ml=dc*dk;
// console.log("Decimal Multiplication : " + ml);

// let rrem=5%2;
// console.log(rrem);



let cmdLinArgs = process.argv; // command line argument take input as String of array first index will be node of and  2nd will be file name
let n = parseInt(cmdLinArgs[2]);

let isPrime = true;
for(let i = 2; i*i<=n; i++){
    if(n%i==0){
        isPrime=false;
        break;
    }
}
if(isPrime==true){
    console.log(n + " is prime");
}else{
    console.log(n + " is not prime");
}
  