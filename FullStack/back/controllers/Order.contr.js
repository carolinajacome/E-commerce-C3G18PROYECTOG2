const orderModel = require("../models/Order.models");

module.exports = class orderController {
    static async getAll(req, res) {
        try {
            const orders = await orderModel.find();
            res.status(200).json(orders);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            let order = req.body;
            order = await orderModel.create(order);
            res.status(201).json(order)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}