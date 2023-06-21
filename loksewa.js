const cheerio= require('cheerio');
const Scrapper= require('./scrapper')
class Loksewa extends Scrapper{
    URL="https://psc.gov.np/category/notice-advertisement/all";
    name="loksewa";

    saveData(){
        this.getData()
        .then((html)=>{
            let data=[];
            const $ =cheerio.load(html);
            $('.table td').each((i,el) =>{
                const Suchana = $(el).text().trim();
                const link =$(el).find('a').attr("href");
                const image = $(el).find('img').attr('src');
                const title = $(el).find('.uk-margin-large-bottom').attr('h1');
                


                data.push({Suchana,link,image, title});
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

