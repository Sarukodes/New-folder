// const cheerio=require("cheerio");
// const Data=require("./data");
// const {defult:axios}=require("axios");

// class Mahanagarpalika extends Data{
//     name="brt_mahanagarpalika";
//     URL="https://biratnagarmun.gov.np/"
    
//     async saveData() {
//         try {
//           const html = await this.getData();
//           let data = [];
//           const $ = cheerio.load(html);
//           const element$('.col-md-5 ul .views-row');
//           element$.each((i,el)=>{
//             const title= ele.text().trim();
//             const link= $(el).find('a').attr('href');
//             const image= $(el).find()
//         })

//         }}