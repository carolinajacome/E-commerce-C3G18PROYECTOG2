const productModel = require("../models/Product.models");

module.exports = class ProductController {
    static async getAll(req, res) {
        try {
            const products = await productModel.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const id = req.params.id;
            const product = await productModel.findOne({ "id": id });
            if (product == null) {
                res.status(404).json({ message: "No encontrado" });
            } else { res.status(200).json(product); }
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            let product = req.body;
            product = await productModel.create(product);
            res.status(201).json(product)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const product = req.body;
            await productModel.updateOne({ id: id }, product);
            res.status(200).json()
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await productModel.deleteOne({ id: id });
            res.status(200).json()
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}