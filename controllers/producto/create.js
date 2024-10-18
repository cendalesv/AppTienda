import Producto from "../../models/Producto.js";

let create = async (req,res,next) => {
    try {
        let productos = req.body
        let all = await Producto.create(productos)
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
        let empleados = req.body;
        let all = await Producto.insertMany(productos)// Usamos insertMany para crear varios registros
        return res.status(201).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

export {create, createMultiple}