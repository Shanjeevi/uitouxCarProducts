const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let currency = new Schema({

    country_currency_short_code  : {type: String },
    currency_short_code  : {type: String },
    country_currency_name  : {type: String },
    country_name  : {type: String },
    currency_symbol  : {type: String },
    active  : {type: String },

});     


module.exports = mongoose.model('currencies', currency); 