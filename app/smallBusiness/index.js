'use strict';
const alexa = require('alexa-app');

let alexaApp = new alexa.app('smallBusiness');
module.change_code = 1;

require('./intents/app')(alexaApp);

module.exports = alexaApp;
