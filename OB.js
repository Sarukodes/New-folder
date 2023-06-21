const cheerio= require('cheerio');
const Scrapper= require('./scrapper')
class OB extends Scrapper{
    URL="https://ourbiratnagar.net";
    name="ob";

    saveData(){
        this.getData()
        .then((html)=>{
            let data=[];
            const $ =cheerio.load(html);
             $('#main-menu menu-item').each((i,el) =>{
                const title = $(el).find('a').attr('title');
                const link = $(el).find('a').attr('href');
                data.push({title,link});
            });
            this.save(data);
        })
        .catch((err)=>{
            console.error(err);
        });
    }
}

const ob=new OB();
ob.saveData();
