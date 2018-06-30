const seleniumConfig = require('./test/selenium/selenium-conf');
const path = require('path');
const phantomjs = require('phantomjs-prebuilt');
const process = require('process');

const currentTime = (new Date()).toISOString().replace(/:/g, '\'').replace(/\./g, '_');

// Load argument from console : "node ./startup.js --chrome"
let browser = process.argv[2] ? process.argv[2].replace(/-/g, '') : 'phantomjs';
if (browser === 'ie') browser = 'internet explorer';

module.exports = {
    src_folders: ['test/e2e/specs'],
    output_folder: `test/e2e/reports/${currentTime}`,
    custom_assertions_path: ['test/e2e/custom-assertions'],
    custom_commands_path: '',
    page_objects_path: '',
    globals_path: '',

    selenium: {
        start_process: true,
        server_path: `${path.resolve()}/node_modules/selenium-standalone/.selenium/selenium-server/${seleniumConfig.selenium.version}-server.jar`,

        log_path: '',
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': `${path.resolve()}/node_modules/selenium-standalone/.selenium/chromedriver/${seleniumConfig.driver.chrome.version}-${seleniumConfig.driver.chrome.arch}-chromedriver`,
            'webdriver.ie.driver': `${path.resolve()}/node_modules/selenium-standalone/.selenium/iedriver/${seleniumConfig.driver.ie.version}-${seleniumConfig.driver.ie.arch}-IEDriverServer.exe`,
        },
    },

    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            // screenshots: {
            //     enabled: true,
            //     path: 'test/e2e/reports',
            // },
            desiredCapabilities: {
                'browserName': browser, // chrome, firefox, internet explorer, phantomjs
                'phantomjs.binary.path': phantomjs.path,
                'javascriptEnabled': true,
                'acceptSslCerts': true,
                // "chromeOptions": {
                //     "args": ["--no-sandbox"],
                // },
            },
        },
    },
};
