const request =require('request');
const cheerio= require('cheerio');
const file = require("./file");
const headings=[];
 
request("https://psc.gov.np/category/notice-advertisement/all", (error , response, html)=>{
    if(!error && response.statusCode==200){
        const $ =cheerio.load(html);

        const nepal = $('td') ;

        console.log(nepal.text());
    }
});
file.saveFile(headings, "test");