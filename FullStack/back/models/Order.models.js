const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    userId: String,
    paymentStatus: String,
    status: String,
    currency: String,
    amount: Number,
    items: {
        number: [{
            id: String,
            quanty: Number
        }]
    },
    shipping: {
        number: [{
            address: {
                country: String,
                city: String,
                street1: String,
                street2: String,
                department: String,
                zip: Number
            },
            origin: {
                country: String,
                street1: String,
                street2: String,
                city: String,
                department: String,
                zip: Number
            }
        }]
    },
    carrier: String,
    tracking: String
});

module.exports = mongoose.model("Order", orderSchema);