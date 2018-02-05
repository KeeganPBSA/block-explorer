'use strict';

const Block = require('../models/Block');
const Joi = require('joi');
const _ = require('lodash');


exports.register = function (server, options) {
  server.route({
      method: 'GET',
      path: '/blocks',
      config: {
          cors: {
              origin: 'ignore'
          },
          validate: {
              query: {
                  sort: Joi.string().default('-_id'),
                  "page[offset]": Joi.number().positive().default(0),
                  "page[limit]": Joi.number().positive().max(100).default(20)
              }
          }
      },
      handler: async function (request, h) {
          const query = {};
          let options = {
              sort: request.query.sort,
              populate: 'author',
              lean: true,
              offset: request.query['page[offset]'],
              limit: request.query['page[limit]']
          };
          // We are hiding metadata here that could be useful later
          let result = (await Block.paginate(query, options)).docs;
          let blocks = _.map(result, function(item) {
              item.transactions = item.transactions.length;
              return item;
          });
          return {blocks: blocks};

      }
  });
};

exports.name = 'block';
