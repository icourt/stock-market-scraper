const axios = require('axios');
const cheerio = require('cheerio');

async function getHTML(ticker) {
    const d = await axios.get(`https://www.google.com/search?q=${ticker}+stock`, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36'
        }
    })
        .catch(e => {
            return console.log(e);
        });
    return d.data;
}

async function getPrice(html, after = true) {
    const c = await cheerio.load(html);
    const afterMarket = await c('div.qFiidc span')[2].children[0].data; // after market
    const result = after ? afterMarket : c('span.IsqQVc.NprOob.XcVN5d').html();

    return result;
}
async function getName(html) {
    const c = await cheerio.load(html);
    const s = await c('span.vk_bk');
    const l = await s.html();
    if(!l) throw new Error("Invalid ticker symbol");
    return l.trim();
}

async function getTicker(html) {
    const c = await cheerio.load(html);
    const s = await c('div.HfMth');
    const l = await s.html();
    return l.trim();
}
async function getChart(html) {
    const c = await cheerio.load(html);
    const chart = await c('td.iyjjgb');

    const open = chart[0].children[0].data;
    const high = chart[1].children[0].data;
    const low = chart[2].children[0].data;
    const cap = chart[3].children[0].data;
    const ratio = chart[4].children[0].data;
    const yield = chart[5].children[0].data;
    const previousClose = chart[6].children[0].data;
    const yearhigh = chart[7].children[0].data;
    const yearlow = chart[8].children[0].data;

    return { open, high, low, cap, ratio, yield, previousClose, yearhigh, yearlow };
}

module.exports = { getHTML, getPrice, getName, getTicker, getChart };
//*[@id="fw-_MnbiXpjYA4-UtAbS4KiwDg106"]/div/div[2]/div[1]/div[1]/span[5]/text()[3]
