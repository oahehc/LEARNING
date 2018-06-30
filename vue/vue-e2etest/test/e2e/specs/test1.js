const nightwatchConfig = require('../../../nightwatch.conf');

console.log('TEST BROWSER: ', nightwatchConfig.test_settings.default.desiredCapabilities.browserName);
console.log('OUTPUT FOLDER: ', nightwatchConfig.output_folder);

module.exports = {
    'Demo test Google' (browser) {
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    },
};

// module.exports = {
//     'Find the answer.': function(client) {
//         // 定义 Bing 页面中的节点.
//         const searchInput = '#sb_form_q';
//         const searchBtn = '#sb_form_go';
//         const question = 'what is microsoft';

//         // 启动浏览器并打开 bing.com.
//         client.url('http://bing.com').maximizeWindow();

//         // 确保 "body" 和输入框可以使用.
//         client.expect.element('body').to.be.present;
//         client.expect.element(searchInput).to.be.visible;
//         client.pause(2000); // 稍等两秒.

//         // 输入 "what is microsoft" 然后搜索.
//         client.setValue(searchInput, question);
//         client.click(searchBtn);
//         client.pause(2000);

//         // 截一张图然后保存到 "reports/answer.png".
//         client.expect.element('body').to.be.present;
//         client.saveScreenshot(`${nightwatchConfig.output_folder}/answers.png`);
//         client.end();
//     },
// }
