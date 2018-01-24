'use strict';

const Block = require('../models/Block');
const Joi = require('joi');

exports.register = function (server, options) {
  server.route({
      method: 'GET',
      path: '/blocks',
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
          // We are hiding metadata here that could be useful later
          return { blocks: (await Block.paginate(query, options)).docs };

      }
  });
};

exports.name = 'block';
