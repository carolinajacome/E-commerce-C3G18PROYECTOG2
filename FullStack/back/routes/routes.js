const express = require("express");
const router = express.Router();

// Mongo DB
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error(err));

// Products routes
router.get("/products", (req, res) => {
    const mensaje = [{
        id: "21104",
        item: "Jean Dama tiro alto",
        description: "S",
        stock: 20,
        price: 78000.0,
        status: "active",
        createAt: "2021-09-09T21:47:34.464+00:00",
        category: {
            id: 2,
            name: "Woman",
            subcategory: [{
                id: 1,
                name: "Jeans"
            }]
        },
        size: "8",
        color: "Azul",
        mark: "J FOUR JEANS",
        path_image: "src/assets/images/women/2.jpg"
    }]
    res.status(200).json(mensaje)
})

router.get("/products/:code", (req, res) => {
    const code = req.params.code;
    const mensaje = [{
        id: code,
        item: "Jean Dama tiro alto",
        description: "S",
        stock: 20,
        price: 78000.0,
        status: "active",
        createAt: "2021-09-09T21:47:34.464+00:00",
        category: {
            id: 2,
            name: "Woman",
            subcategory: [{
                id: 1,
                name: "Jeans"
            }]
        },
        size: "8",
        color: "Azul",
        mark: "J FOUR JEANS",
        path_image: "src/assets/images/women/2.jpg"

    }]
    res.status(200).json(mensaje)
})

// Para subir un nuevo producto
router.post("/products", (req, res) => {
    const product = req.body;
    res.status(201).json(product);
})

module.exports = router;