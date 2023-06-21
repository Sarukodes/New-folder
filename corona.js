const cheerio= require("cheerio");
const Scapper =require("./scrapper");

class Corona extends Scapper{
URL="https://www.worldometers.info/coronavirus/"
name="corona";

saveData(){
    this.getData()
    .then((html)=>{
        let data=[];
        const $ =cheerio.load(html);
        const rows = $('.table tbody tr').slice(8);
        rows.each((index, element) => {
            const columns = $(element).find('td');
            const country = $(columns[1]).text().trim();
            const cases = $(columns[2]).text().trim();
            const Total_death = $(columns[4]).text().trim();
            data.push({country,cases, Total_death});
        });
        this.save(data);
    })
    .catch((err)=>{
        console.error(err);
    });
}
}

const corona=new Corona();
corona.saveData();
