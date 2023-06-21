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
                const title = $(el).text().trim();
                const link =$(el).find('a').attr("href");
                const image = $(el).find('img').attr('src');
                const topic ="Lokesewa";
                const topics =$(el).text(topic);
                const category ="notice";
                const categorys=$(el).text(category)
                data.push({ title, image, link, topic, category});
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

