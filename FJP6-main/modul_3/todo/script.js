let inputTag = document.querySelector("input")
let ulTag = document.querySelector("ul");

inputTag.addEventListener("keydown",function(e){
    let key = e.key;
    if(key == "Enter"){
        let value = inputTag.value;
        // console.log(value);
        inputTag.value = "";
        let litag = document.createElement("li");
        litag.innerText = value;
        ulTag.appendChild(litag);
    }
    
})