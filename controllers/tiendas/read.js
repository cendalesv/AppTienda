import Tienda from "../../models/Tienda.js";

let allTiendas = async (req,res,next) => {
    try {
        let all = await Tienda.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let storesByAddress = async (req,res,next) => {
    try {
        console.log(req.params);
        
        let addressQuery = req.params.a
        let all = await Tienda.find({ address : addressQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let storesByName = async (req,res,next) => {
    try {
        console.log(req.params);
        
        let nameQuery = req.params.n
        let all = await Tienda.find({ name : nameQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {allTiendas,storesByAddress,storesByName}