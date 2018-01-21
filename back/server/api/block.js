'use strict';

exports.register = function (server, options) {
  server.route({
      method: 'GET',
      path: '/block',
      handler: function (request, h) {
          return { message: 'test' };
      }
  });
};

exports.name = 'block';
