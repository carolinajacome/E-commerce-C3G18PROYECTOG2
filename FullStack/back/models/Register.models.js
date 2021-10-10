const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
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