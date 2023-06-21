const request =require('request');
const cheerio= require('cheerio');
const file = require("./file");

const data =[];
request("https://psc.gov.np/category/notice-advertisement/all", (error , response, html)=>{
    if(!error && response.statusCode==200){
        const $ =cheerio.load(html);
 $('.table td').each((i,el) =>{
        const nepal = $(el).text().trim();
        const link =$(el).find('a').attr("href");
        data.push({nepal,link});
    });
    file.saveFile(data,"test");
}
});
