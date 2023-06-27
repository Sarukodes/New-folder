const cheerio= require('cheerio');
const Data= require('./data')
class Bharatpur extends Data{
    URL="https://bharatpurmun.gov.np/en/node/27";
    name="";

    saveData(){
        this.getData()
        .then((html)=>{
            let bharatpur=[];
            const $ =cheerio.load(html);
            this.save(bharatpur,'bharatpur')

            $('.region-workflow-first .views-field-title .field-content').each((i,el)=>{
                const title = $(el).find('a').text();
                const link =$(el).find('a').attr("href");
                bharatpur.push({ 
                    title,
                    link:'https://bharatpurmun.gov.np/'+link,
                    image:" ",
                    topic:"Bharatpur ",
                    category:"notice"
                });
            });

         this.save(bharatpur,'bharatpur');
        })
         
    }
}

const bharatpur=new Bharatpur();
bharatpur.saveData();

