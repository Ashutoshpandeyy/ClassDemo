const  puppeteer  = require("puppeteer");

// npm i puppeteer  /// installed
// const  Puppeteer = require("Puppeteer");

// let broweserPromose = Puppeteer.launch({headless:false});

// broweserPromose.then(function(browserInstance){
//     console.log("Browser is oppend");
// })


// Open google 

let Puppeteer = require("puppeteer");

let opnBroesrGoogle = Puppeteer.launch({headless:false});
opnBroesrGoogle.then(function(browser){
    console.log("Browser is Opend");
    let pagePromis = browser.newPage();
    return pagePromis;
}).then(function(page){
    console.log("page is opend");
    let urlPromis = page.goto('https://www.google.com/');
    return urlPromis;
}).then(function(){
    console.log("Google is Oppend");
}).catch(function(error){
    console.log(error);
})