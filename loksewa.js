const cheerio= require('cheerio');
const Data= require('./data')
class Loksewa extends Data{
    title="ds";
    image="sd";
    URL="https://psc.gov.np/category/notice-advertisement/all";
    topic="loksewa";
    category="ds";


    saveData(){
        this.getData()
        .then((html)=>{
            let data=[];
            const $ =cheerio.load(html);
            $('.table td').each((i,el) =>{
                const Suchana = $(el).text().trim();
                const link =$(el).find('a').attr("href");
                data.push({Suchana,link});
            });
            this.save(data);
        })
        .catch((err)=>{
            console.error(err);
        });
    }
}

const loksewa=new Loksewa();
loksewa.saveData();
