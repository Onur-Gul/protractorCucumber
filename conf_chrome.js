const { protractor } = require("protractor/built/ptor");

protractor = require('./conf.js');
let config = protractor.config;

config.capabilities= {
    'browserName':'chrome',
    'directConnect': true,
    chromeOptions: {
        'useAutoationExtentions': false,
        'args':[
            'show-fps=counter=true',
            'allow-file-access-from-files'
        ],
        'binary': ''
    },
    metadata:{
        browser:{
            name: 'chrome',
            version: '90'
        },
        device: 'DESKTOP-NSQF3A0',
        platform: {
            name: 'Windows 10 Home',
            version: '2004'
        }
    }
}
exports.config = config;