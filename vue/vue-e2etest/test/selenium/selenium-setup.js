// 建立 Selenium 安装脚本
const selenium = require('selenium-standalone');
const seleniumConfig = require('./selenium-conf.js');

selenium.install({
    version: seleniumConfig.selenium.version,
    baseURL: seleniumConfig.selenium.baseURL,
    drivers: seleniumConfig.driver,
    logger(message) {
        console.log(message);
    },
    progressCb(totalLength, progressLength, chunkLength) {
        // console.log('progressCb:', totalLength, progressLength, chunkLength);
    },
}, (err) => {
    if (err) throw new Error(`Selenium install fail: ${err}`);
    console.log('Selenium install success.');
});
