import Producto from "../../models/Producto.js";

let allProductos = async (req,res,next) => {
    try {
        let all = await Producto.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    } 
}

let productByName = async (req,res,next) => {
    try {
        console.log(req.params);
        
        let nameQuery = req.params.n
        let all = await Producto.find({ name : nameQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let productByBrand = async (req,res,next) => {
    try {
        console.log(req.params);
        
        let brandQuery = req.params.b
        let all = await Producto.find({ brand : brandQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}
export {allProductos,productByBrand,productByName}