const express = require("express");
const productController = require("../controllers/Product.contr");
const registerController = require("../controllers/Register.cont");
const router = express.Router();

// Mongo DB
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error(err));

// Products routes
router.get("/products", productController.getAll);
router.get("/products/:id", productController.getById);
router.post("/products", productController.create);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.delete);

//Register routes
router.post("/register", registerController.create);

module.exports = router;