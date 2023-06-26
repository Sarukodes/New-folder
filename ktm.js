const cheerio= require('cheerio');
const Data= require('./data')
class Ktm extends Data{
    URL="https://kathmandu.gov.np/";
    name="";

    saveData(){
        this.getData()
        .then((html)=>{
            let data=[];
            let bharatpur=[];
            const $ =cheerio.load(html);
            $('.tab-content.current ul li').each((i,el) =>{
                const title = $(el).find('a').text();
                const link =$(el).find('a').attr("href");
                data.push({ title,
                    link,
                    image:" ",
                    topic:"ktm ",
                    category:"main news"
                });
            });
            this.save(data,'ktm')

        })
        .catch((err)=>{
            console.error(err);
        });
    }
}

const ktm=new Ktm();
ktm.saveData();

