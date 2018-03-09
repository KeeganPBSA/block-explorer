'use strict';

const Joi = require('joi');
const _ = require('lodash');

const WS = require('peerplaysjs-ws')

const register = function (server, options) {
  server.route({
      method: 'GET',
      path: '/account',
      config: {
          cors: {
              origin: 'ignore'
          }
      },
      handler: async function (request, h) {
        const query = {};
        let options = {
            sort: request.query.sort,
            populate: 'author',
            lean: true
        };

        return new Promise((resolve, reject) => {
            WS.Apis.instance("wss://api1.peerplays.download/ws", true).init_promise.then(res => {
                WS.Apis.instance().db_api().exec( "get_full_accounts", [["taconator-witness"], false]).then(results => {
                    resolve(results)
                })
            });
        })
        
                
      }
  });
};


module.exports = {
    name: 'api-account',
    register
};
