const process = require('process');

module.exports = {
    // Selenium 的版本配置信息。请在下方链接查询最新版本。升级版本只需修改版本号即可。
    // https://selenium-release.storage.googleapis.com/index.html
    selenium: {
        version: '3.0.1',
        baseURL: 'https://selenium-release.storage.googleapis.com',
        // start_process: false,
    },
    driver: {
        chrome: {
            // Chrome 浏览器启动 Driver，请在下方链接查询最新版本。
            // https://chromedriver.storage.googleapis.com/index.html
            version: '2.9',
            arch: process.arch,
            baseURL: 'https://chromedriver.storage.googleapis.com',
        },
        ie: {
            // Check latest version here |请在下方链接查询最新版本:
            // https://selenium-release.storage.googleapis.com/index.html
            version: '2.53.1',
            arch: process.arch,
            baseURL: 'https://selenium-release.storage.googleapis.com',
        },
    },
};
