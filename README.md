# Stock Market Scraper
A node package that allows you to scrape ticker info from Google Finance

# Installation

```shell
npm install stock-market-scraper
```

# Usage
### Using .then()
```js
const scrape = require('stock-market-scraper');

scrape('TICKR')
.then(info => console.log(info));

// Result:
// {
//  companyName: 'Some Company',
//  ticker: 'TICKR',
//  price: '0.00',
//  stats: {
//    open: '0.00',
//    high: '0.00',
//    low: '0.00',
//    cap: '0.00M',
//    ratio: '-',
//    yield: '-',
//    previousClose: '0.00',
//    yearhigh: '0.00',
//    yearlow: '0.00'
//  }
// }

```
### Using async/await

```js
const scrape = require('stock-market-scraper');
(async() => {
    const get = await scrape('TICKR')
    console.log(get);
})();

// Result:
// {
//  companyName: 'Some Company',
//  ticker: 'TICKR',
//  price: '0.00',
//  stats: {
//    open: '0.00',
//    high: '0.00',
//    low: '0.00',
//    cap: '0.00M',
//    ratio: '-',
//    yield: '-',
//    previousClose: '0.00',
//    yearhigh: '0.00',
//    yearlow: '0.00'
//  }
// }
