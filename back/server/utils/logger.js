const Bunyan = require('bunyan');
const Config = require('../../config');

const log = Bunyan.createLogger({
  name: Config.get('/projectName'),
  level: Config.get('/logLevel'),
  serializers: Bunyan.stdSerializers
});

module.exports = log;
