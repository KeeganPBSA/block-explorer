'use strict';
const Config = require('./config');
const Glue = require('glue');
const Manifest = require('./manifest');
const Mongoose = require('mongoose');
const Log = require('./server/utils/logger');


exports.deployment = async (start) => {
    const manifest = Manifest.get('/', process.env);
    const server = await Glue.compose(manifest, { relativeTo: __dirname });
    await server.initialize();
    if (!start) {
        return server;
    }
    await server.start();

    let mongoUri =  Config.get('/mongodb/uri');

    Mongoose.connect(mongoUri, {}).then(() => {
        Log.info(`Connected to ${mongoUri}`);
    },
    err => {
        Log.error(err);
    });

    Log.info(`Server started at ${server.info.uri}`);
    return server;
};

if (!module.parent) {
    exports.deployment(true);
    process.on('unhandledRejection', (err) => {
        throw err;
    });
}
