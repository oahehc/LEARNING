var ROOT_URL = 'https://www.msn.com/';

var Crawler = require('simplecrawler');
var crawler = new Crawler(ROOT_URL);
var cheerio = require('cheerio');

// 設定每次 request 的區間
crawler.interval = 60 * 1000;

// 限制只有一個併發
crawler.maxConcurrency = 1;

crawler.on('crawlstart', function() {
    console.log('Crawl starting ', ROOT_URL);
});

// 設定抓取條件，只抓取 url 中，子路徑是 news 的網頁。
crawler.addFetchCondition(function(queueItem, referrerQueueItem) {
    return queueItem.path.indexOf('/news/') > -1
})

crawler.on('fetchcomplete', function(queueItem, responseBuffer, response) {
    if (ROOT_URL == queueItem.url) return;
    var $ = cheerio.load(responseBuffer);
    var title = $('h1').html();
    console.log('news title：', title);
});

crawler.on('complete', function() {
    console.log('Finished!', ROOT_URL);
});

crawler.start();
