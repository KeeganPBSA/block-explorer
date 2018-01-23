const Mongoose = require('mongoose');
const MongoosePaginate = require('mongoose-paginate');
const Joi = require('joi');
const Joigoose = require('joigoose')(Mongoose);

var joiBlockSchema = Joi.object({
    _id: Joi.number().integer().required(),
    previous: Joi.string().required(),
    timestamp: Joi.string().required(),
    witness: Joi.string().required(),
    next_secret_hash: Joi.string().required(),
    previous_secret: Joi.string().required(),
    transaction_merkel_route: Joi.string().required(),
    extensions: Joi.array().required(),
    witness_signature: Joi.string().required(),
    transactions: Joi.array().required()
});

var mongooseBlockSchema = new Mongoose.Schema(Joigoose.convert(joiBlockSchema));
mongooseBlockSchema.plugin(MongoosePaginate);

Block = Mongoose.model('Block', mongooseBlockSchema);

module.exports = Block;
