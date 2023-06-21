const cheerio  = require("cheerio");
const Scrapper = require("./scrapper");

class Gadget extends Scrapper{
    URL="https://www.gadgetbytenepal.com/category/mobile-price-in-nepal/";
    name="gadget";
    saveData(){
        let data=[];
        console.log("getting data");
        this.getData()
        .then((html)=>{
            const $ =cheerio.load(html);
            const rows = $('.su-table tbody tr').slice(1);
            rows.each((index, element) => {
                const columns = $(element).find('td');
                const modelName = $(columns[0]).text().trim();
                const price = $(columns[1]).text().trim();
                data.push({
                    name:modelName,
                    price:price
                });
            });
           
            this.save(data);
        })
        .catch((err)=>{
            console.log();
        });

    }
}
const g=new Gadget();
g.saveData();