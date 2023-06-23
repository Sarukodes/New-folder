const cheerio = require("cheerio");
const Data = require("./data");
const { default: axios } = require("axios");

class Pcs_loksewa extends Data {
    name = " ";
    URL = "https://psc.gov.np/";
    saveData() {
        this.getData()
            .then((html) => {
                let data = [];
                let result = [];
                const $ = cheerio.load(html);
                    $('.table tbody tr').each((i, element) => {
                        const columns = $(element).find('td');
                        const Date = $(columns[0]).text().trim();
                        const Ads_number = $(columns[1]).text().trim();
                        const visible_topic = $(columns[2]).text().trim();
                        const File = $(element).find('a').attr("href");

                        if (Date && Ads_number && visible_topic && File) {
                            data.push({ Date, Ads_number, visible_topic, File });
                        }
                        this.save(data, 'psc_loksewa');
                    });
                

                $('.table-responsive tbody tr').each((i, element) => {
                    const columns = $(element).find('td');
                    const Date = $(columns[0]).text().trim();
                    const Discription = $(columns[1]).text().trim();
                    const Starting_date = $(columns[2]).text().trim();
                    const Ending_date = $(columns[3]).text().trim();
                    const File = $(element).find('a').attr("href");

                    if (Date && Discription && Starting_date && Ending_date && File) {
                        result.push({ Date, Discription, Starting_date, Ending_date, File });
                    }

                    this.save(result, 'psc_result')
                });

            })
            .catch((err) => {
                console.error(err);
            });
    }
}
const psc_loksewa = new Pcs_loksewa();
psc_loksewa.saveData();


