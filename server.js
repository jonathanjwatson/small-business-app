'use strict';

const AlexaAppServer = require('alexa-app-server');

let server = new AlexaAppServer({
    port: process.env.PORT,
    server_root: __dirname,
    app_dir: 'app',
    app_roote: '/alexa/',
    public_html: 'public',
    verify: false
});

server.start();