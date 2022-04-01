//if the function pass as a argument inside the function is called call back
// const request = require("request");

const request = require('request');
const jsdom = require("jsdom")
const {JSDOM} = jsdom;

request('http://www.google.com',cb); 

function  cb (error,response, body) {
    if(error){
        console.error('error:', error); // Print the error if one occurred
    }else{
        console.log('body:', body); // Print the HTML for the Google homepage.
    }  
}