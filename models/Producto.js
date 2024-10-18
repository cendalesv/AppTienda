import { Schema,model } from "mongoose";

let collection = "productos"
let schema = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true }
},{
    timestamps:true
})

let Producto = model(collection,schema)

export default Producto