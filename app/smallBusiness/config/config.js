'use strict';

const nconf = require('nconf');

let enviroment,
    port,
    confit;

config = {
    default: {
        appName: 'small-business-app',
        smallBusinessApi: {
            v1: {
                url: ''
            }
        },
    }
};

nconf.env().argv();

environment = nconf.get('ENVIRONMENT');
port = nconf.get('PORT');

if (typeof environment === 'undefined' || typeof port === 'undefined') {
    console.error(`ENVIRONMENT and/or PORT are not set. Shutting down. ENVIRONMENT: ${environment} - PORT: ${port}`);
    process.exit(1);
}

switch (environment.toLowerCase()) {
    case 'dev':
        nconf.defaults(config.dev);
        console.log('Using Dev Config');
        break;
    default: 
        console.log('using default');
        nconf.defaults(config.default);
}

nconf.overrides(config.default);

module.exports = nconf;