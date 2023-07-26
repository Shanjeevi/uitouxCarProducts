const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let products = new Schema({
    name: { 
        type: String, 
    },
    sku: { 
        type: String 
    },
    rating: { 
        type: String 
    },
    price: { 
        type: String 
    },
    image: { 
        type: String 
    },
    created_at : { 
        type: Date 
    },
})

module.exports = mongoose.model("products", products);