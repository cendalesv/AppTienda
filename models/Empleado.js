import { Schema,model } from "mongoose";

let collection = "empleados"
let schema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    salary: { type: Number, required: true }
},{
    timestamps:true
})

let Empleado = model(collection,schema)

export default Empleado