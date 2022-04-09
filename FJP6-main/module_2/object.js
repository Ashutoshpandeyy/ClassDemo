// Empty Object
// object is a key  value pair
let obj={};
console.log(obj);
//key is bydefault woud be string

let ob ={
    "Name": "Ashu",
    "Age": 22,
    "phone" : 8340742437
}
// find length of oject
let siz= Object.keys(ob).length;
console.log(siz);
// print keys of the string

for(let j  in ob){
    console.log(j);
}

let capAmerica={
    Name : "Ashutosh",
    Age : 22,
    Mob :8340742437,
    Friends : ['Akshay', 'Dinesh' ,'Mithilesh','Sunny'],
    Address : {
        city : "Dehri",
        state : "Bihar"

    },
    sayHi:function(){
        console.log("Hello EveryOne");
    }
}
// extract particular value from the object
console.log(capAmerica.Address.city);

// console.log(capAmerica.sayHi());
capAmerica.sayHi()

// Add new key in to object
capAmerica.Movies=['Avengers','Civil War','Endgame']
console.log(capAmerica)

// Delete a key from a object

delete capAmerica.Movies;
console.log(capAmerica);

// update value from the object

capAmerica.Address.state="NewDelhi";
console.log(capAmerica);

// Extract the key from the object
// . dot operator key direct convert in to string
console.log(capAmerica.Name); // . dot notation
console.log(capAmerica['Name']) // this is called bracket notation






