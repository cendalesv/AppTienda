import Tienda from "../../models/Tienda.js";

let create = async (req,res,next) => {
    try {
        let tiendas = req.body
        let all = await Tienda.create(tiendas)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let createMultiple = async (req, res,next) => {
    try {
        // Crea varios empleados
        let tiendas = req.body;
        let all = await Tienda.insertMany(tiendas)// Usamos insertMany para crear varios registros
        return res.status(201).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

export {create,createMultiple}