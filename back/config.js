'use strict';
const Confidence = require('confidence');
const Dotenv = require('dotenv');

Dotenv.config({ silent: true });

const criteria = {
    env: process.env.NODE_ENV
};

const config = {
    projectName: 'Peerplays Block Explorer Backend',
    logLevel: "info",
    port: {
        api: 8000,
        socket: 8001
    },
    mongodb: {
        uri: {
            $filter: 'env',
            production: process.env.MONGODB_URI,
            test: 'mongodb://localhost:27017/private_test',
            $default: 'mongodb://localhost:27017/private_test'
        }
    },
};

const store = new Confidence.Store(config);

exports.get = function (key) {
    return store.get(key, criteria);
};


exports.meta = function (key) {
    return store.meta(key, criteria);
};
