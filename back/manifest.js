'use strict';
const Confidence = require('confidence');
const Config = require('./config');

const criteria = {
    env: process.env.NODE_ENV
};

const manifest = {
    server: {
        port: Config.get('/port/api'),
        debug: {
            $filter: 'NODE_ENV',
            development: {
                log: ['error', 'implementation', 'internal'],
                request: ['error', 'implementation', 'internal']
            }
        }
    },
    register: {
        plugins: [
            {
                plugin: './server/api/index',
                routes: {
                    prefix: '/api'
                }
            }
        ]
    }
};

const store = new Confidence.Store(manifest);

exports.get = function (key) {
    return store.get(key, criteria);
};

exports.meta = function (key) {
    return store.meta(key, criteria);

};
