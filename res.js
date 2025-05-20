import Parser from 'rss-parser';
let parser = new Parser();
// 定義一個非同步函數
async function fetchData() {
    let feed = await parser.parseURL('https://www.cwa.gov.tw/rss/Data/cwa_warning.xml');
    console.log(feed.title);
    feed.items.forEach(item => {

        console.log(item.title + ':' + item.link+':'+item.content);
    });

}
// 調用非同步函式
fetchData();
console.log("立刻執行");