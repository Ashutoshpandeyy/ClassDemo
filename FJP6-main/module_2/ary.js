
// Empty array
let arr=[];
console.log(arr);

// array with element

let elearay= [1,2,3,4,5,"helo",false,'c',5.5];
console.log(elearay);
// retrive value by index
console.log("Element at 4th index " + elearay[4]);

// change value in array

elearay[5]=6;
console.log(elearay);

// Array Method

// 1.-> Push add item in array at last

console.log("-----------------------------")
elearay.push("jai verr hanuman");
console.log(elearay);


// 2-> pop method delete item in array at last index
console.log("------------------------------");
elearay.pop();
console.log(elearay);


// 3-> shift method remove elemrn in array at first index
console.log("--------------------------");
elearay.shift();
console.log(elearay);

// 4->unshift method add element in array at first index

console.log("--------------------------");
console.log();
elearay.unshift("jai Shree Ram");
console.log(elearay);

//  find array length

let leng=elearay.length;
console.log(leng);





