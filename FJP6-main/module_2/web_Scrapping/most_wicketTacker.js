const request = require("request");
const jsdom= require("jsdom");
const {JSDOM} = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link,cb);
function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        // console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let mostWickt = 0;
        let nameOfHighestWktTcr = "";
        let BowlerTable = document.querySelectorAll(".table.bowler");
        for(let i =0; i<BowlerTable.length; i++){
            let row = BowlerTable[i].querySelectorAll("tbody tr");
            for(let j =0; j<row.length; j++){
                let tds = row[j].querySelectorAll("td");
                if(tds.length>1){
                    let name = tds[0].textContent;
                    let wicket = tds[4].textContent;

                    if(wicket>mostWickt){
                        mostWickt = wicket;
                        nameOfHighestWktTcr = name;
                    }
                }
            }
        }
        console.log("Name of Highest wicket tacker : " ,nameOfHighestWktTcr );
        console.log("Numaber of Wicket taken : ", mostWickt);
    }

}