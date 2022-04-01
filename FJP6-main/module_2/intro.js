// printing in javaScript
console.log("JAi Shree RAm");

// varibale in js
let a=17;  //  nummber 
console.log(a);

let chr ='A'; // character
console.log(chr);
let str="I am Ashutosh"; //String
console.log(str);

// LOOP

for(let i=1;i<=10;i++)
{
    console.log(i);
}
let i =1;
while(i<=10)
{
    console.log(i);
    i++;
}




// check prime

let n=14;
let cnt=0;
for(let i=2;i*i<n;i++)
{
    if(n%i==0)
    {
        cnt++;
    }
}
if(cnt==0)
{
    console.log("prime");
}
else{
    console.log("not prime");
}