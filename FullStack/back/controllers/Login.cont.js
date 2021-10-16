const loginModel = require("../models/Login.models");

module.exports = class registerController {

    static async insert(req, res) {
        try {
            let newLogin = req.body;
            newLogin = await loginModel.insert(newLogin);
            newLogin.password = undefined;
            res.status(201).json(newUser)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async validateLogin(req, res) {
        try {
            const credential = req.body;
            const user = await userModel.findOne({ "email": credential.email });
            if (user == undefined || user == null) {
                res.status(404).json({ message: "Usuario no existe" });
            } else if (user.password != credential.password) {
                res.status(403).json({ message: "Contraseña no valida" })
            } else {
                user.password = undefined;
                res.status(200).json(user);
            }
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }


}