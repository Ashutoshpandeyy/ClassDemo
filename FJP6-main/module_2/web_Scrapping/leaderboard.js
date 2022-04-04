const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard = [];
let counter = 0;

request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
      
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScorecardTags = document.querySelectorAll('[class="ds-flex ds-mx-4 ds-pt-2 ds-pb-3 ds-space-x-4 ds-border-t ds-border-line-default-translucent"] [class="ds-inline-flex ds-items-center ds-leading-none"]:nth-child(3) a');
        for(let i=0;i<allScorecardTags.length;i++){
            // console.log(allScorecardTags[i].href)
            let link = allScorecardTags[i].href;
            let completeLink = "https://www.espncricinfo.com"+link;
            // console.log(completeLink);
            request(completeLink,cb2);
            counter++;
        }
        
    }
}

function cb2(error,response,html){
    
    if(error){
        console.log(error);
    }else{
       
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmenRow = document.querySelectorAll('tbody [class="ds-border-b ds-border-line ds-text-tight-s"]');
        for(let i=0;i<batsmenRow.length;i++){
            let cells = batsmenRow[i].querySelectorAll("td");
            if(cells.length == 8){
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let balls = cells[3].textContent;
                let fours = cells[5].textContent;
                let sixes = cells[6].textContent;
                // console.log("Name : ",name,"Runs : ",runs,"Balls : ",balls,"Fours : ",fours,"Sixes : ",sixes);
                processPlayer(name,runs,balls,fours,sixes);
            }
        }
        counter--;
        if(counter == 0){
            console.log(leaderboard);
            let data = JSON.stringify(leaderboard);
            fs.writeFileSync('BatsmenStats.json',data);
        }
    }
}

function processPlayer(name,runs,balls,fours,sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for(let i=0;i<leaderboard.length;i++){
        let playerObj = leaderboard[i];
        if(playerObj.Name == name){
            //will do some work here
            playerObj.Runs+=runs;
            playerObj.Innings+=1;
            playerObj.Balls+=balls;
            playerObj.Fours+=fours;
            playerObj.Sixes+=sixes;
            return;
        }
    }
    // code coming here means we did not find our player inside leaderboard
    let obj = {
        Name:name,
        Innings:1,
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes
    }
    leaderboard.push(obj);
}