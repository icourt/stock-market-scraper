const axios = require('axios');
const cheerio = require('cheerio');
const functions = require('./functions.js');

async function scrape(symbol, afterMarket = true) {
    const html = await functions.getHTML(symbol);

    const companyName = await functions.getName(html);
    const ticker = await functions.getTicker(html);
    const price = await functions.getPrice(html, afterMarket);
    const stats = await functions.getChart(html);

    return { companyName, ticker, price, stats }

}

module.exports = scrape;