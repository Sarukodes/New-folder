const cheerio= require('cheerio');
const Data= require('./data')
class Lalitpur extends Data{
    URL="https://lalitpurmun.gov.np/";
    name="";

    saveData(){
        this.getData()
        .then((html)=>{
            let lalitpur=[];
            const $ =cheerio.load(html);
            this.save(lalitpur,'lalitpur')

            $('.region-sidebar-third .views-field-title .field-content').each((i,el)=>{
                const title = $(el).find('a').text();
                const link =$(el).find('a').attr("href");
                lalitpur.push({ 
                    title,
                    link:"https://lalitpurmun.gov.np/"+link,
                    image:" ",
                    topic:"lalitpur ",
                    category:"tender_notice"
                });
            });

         this.save(lalitpur,'lalitpur');
        })
         
    }
}

const lalitpur=new Lalitpur();
lalitpur.saveData();

