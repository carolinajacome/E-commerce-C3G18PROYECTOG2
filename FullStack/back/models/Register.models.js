const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    rol: {
        id: String,
        name: String,
    }
});

module.exports = mongoose.model("Register", registerSchema);