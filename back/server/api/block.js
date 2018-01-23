'use strict';

const Block = require('../models/Block');
const Joi = require('joi');

exports.register = function (server, options) {
  server.route({
      method: 'GET',
      path: '/block',
      config: {
          validate: {
              query: {
                  sort: Joi.string().default('_id'),
                  "page[offset]": Joi.number().positive().default(0),
                  "page[limit]": Joi.number().positive().max(100).default(20)
              }
          }
      },
      handler: async function (request, h) {
          var query = {};
          var options = {
              sort: request.query.sort,
              populate: 'author',
              lean: true,
              offset: request.query['page[offset]'],
              limit: request.query['page[limit]']
          };
          return await Block.paginate(query, options);
      }
  });
};

exports.name = 'block';
