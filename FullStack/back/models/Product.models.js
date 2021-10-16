const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id: String,
    item: String,
    description: String,
    reference: String,
    stock: Number,
    price: Number,
    status: String,
    category: {
        id: String,
        name: String,
        subcategory: [{
            id: String,
            name: String
        }]
    },
    size: Number,
    color: String,
    mark: String,
    path_image: String
});

module.exports = mongoose.model("Product", productSchema);