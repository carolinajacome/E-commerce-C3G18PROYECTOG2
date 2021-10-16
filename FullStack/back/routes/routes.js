const express = require("express");
const orderController = require("../controllers/Order.contr");
const productController = require("../controllers/Product.contr");
const registerController = require("../controllers/Register.cont");
const userController = require("../controllers/Login.cont")
const router = express.Router();

// Mongo DB
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error(err));


// Orders routes
router.get("/orders", orderController.getAll);
router.post("/orders", orderController.create);

// Products routes
router.get("/products", productController.getAll);
router.get("/products/:id", productController.getById);
router.post("/products", productController.create);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.delete);

//Register routes
router.post("/registers", registerController.create);
router.get("/registers", registerController.getAll); //Para hacer pruebas y verificar si se realizaron lso registros.
router.get('/registers/:email', registerController.getByEmail);

//Users routes
router.post("/user", userController.insert);
router.post("/authenticate", userController.validateLogin);

module.exports = router;