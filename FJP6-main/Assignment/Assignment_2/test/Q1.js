// Q-  List the side effect and convert the function to a pure function which does the same thing

let arr = [1, 2, 3, 4];

function f( arr1= [1,2,3,4,6]) {

     let arr = arr1
     
    arr.forEach((data)=>{
        console.log(data)
    })

    for (x in arr) {
        arr[x] = 1
        // console.log(x,arr[x]);
    }
    

    return arr;
}

// console.log(arr);  // [1,2,3,4]

console.log(f(arr));    //[0,0,0,0]

console.log(arr);  // [1,2,3,4]