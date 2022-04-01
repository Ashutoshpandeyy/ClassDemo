const  request = require("request");
const jsdom = require("jsdom");

const {JSDOM} = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard = [];
request(link,cb);

function cb(error, response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScoreCardTags = document.querySelectorAll('a[data-hover="Scorecard"]');
        for(let i =0; i<allScoreCardTags.length;i++){
            let link = allScoreCardTags[i].href;
            let completelink =  "https://www.espncricinfo.com" + link;
            // console.log(completelink);
            request(completelink,cb2)
        }
    }
}
function cb2(error, response ,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const  document = dom.window.document;
        let batsmanrow = document.querySelectorAll(".table.batsman tbody tr");
        for(let i = 0; i<batsmanrow.length; i++){
            let cells = batsmanrow[i].querySelectorAll("td");
            if(cells.length==8){
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let balls = cells[3].textContent;
                let fours = cells[5].textContent;
                let sixes = cells[6].textContent;
            }
        }
    }
}

processPlayer('Rohit','15','4','2','4');
processPlayer('Virat','50','20','4','3');
processPlayer('Rohit','40','20','1','2');
function processPlayer(name,runs,balls,fours,sixes){
    runs = Number[runs];
    balls = Number[balls];
    fours = Number[fours];
    sixes = Number[sixes];
    for(let i =0; i<leaderboard.length; i++){
        let playerobj = leaderboard[i];
        playerobj.Runs +=runs;
        playerobj.Balls +=balls;
        playerobj.Fours +=fours;
        playerobj.Sixes +=sixes;
        return;
    }
    let obj = {
        Name :name,
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes
    }
    leaderboard.push(obj);
}
