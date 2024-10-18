import { Schema,model } from "mongoose";

let collection = "tiendas"
let schema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true }
},{
    timestamps:true
})

let Tienda = model(collection,schema)

export default Tienda