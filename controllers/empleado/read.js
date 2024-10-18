import Empleado from "../../models/Empleado.js";

let allEmpleados = async (req,res,next) => {
    try {
        let all = await Empleado.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    } 
}

let employeesByPosition = async (req,res,next) => {
    try {
        console.log(req.params);
        
        let positionQuery = req.params.p
        let all = await Empleado.find({ position : positionQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let employeesbyname = async (req,res,next) => {
    try {
        console.log(req.params);
        
        let nameQuery = req.params.n
        let all = await Empleado.find({ name : nameQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}
export {allEmpleados,employeesByPosition,employeesbyname}
