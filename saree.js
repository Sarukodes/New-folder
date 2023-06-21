const cheerio= require('cheerio');
const Scrapper= require('./scrapper')
class Sare extends Scrapper{
    URL="https://www.daraz.com.np/womens-sarees/?spm=a2a0e.searchlistcategory.card.3.50b05884KtUwgp&item_id=125922667&from=onesearch_category_1738";
    name="sare";

    saveData(){
        this.getData()
        .then((html)=>{
            let data=[];
            const $ =cheerio.load(html);
             $('.ant-row').each((i,el) =>{
                const Sare_name = $(el).find('.title--wFj93');
                const Price = $(el).find('a').attr('price');
                data.push({Sare_name,Price});
            });
            this.save(data);
        })
        .catch((err)=>{
            console.error(err);
        });
    }
}

const sare=new Sare();
sare.saveData();
