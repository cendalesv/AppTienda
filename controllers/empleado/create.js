import Empleado from "../../models/Empleado.js";

let create = async (req,res,next) => {
    try {
        let empleados = req.body
        let all = await Empleado.create(empleados)
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
        let all = await Empleado.insertMany(empleados)// Usamos insertMany para crear varios registros
        return res.status(201).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

export { create,createMultiple }


