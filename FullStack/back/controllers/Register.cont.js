const registerModel = require("../models/Register.models");

module.exports = class registerController {
    static async create(req, res) {
        try {
            let newUser = req.body;
            newUser = await registerModel.create(newUser);
            res.status(201).json(newUser)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async getAll(req, res) {
        try {
            const registers = await registerModel.find();
            res.status(200).json(registers);
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async getByEmail(req, res) {
        try {
            const email = req.params.email;
            const register = await registerModel.findOne({ "email": email });
            if (register == null) {
                res.status(404).json({ message: 'No encontrado' })
            } else {
                res.status(200).json(register);
            }
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

}

