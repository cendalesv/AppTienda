import mongoose from "mongoose";

let url = process.env.URI_MONGO

console.log(url);

// Primera forma de coneccion
mongoose.connect(url)
.then(()=> console.log("Base de datos conectada"))
.catch(error => console.log(error))

// Segunda forma de coneccion
/*async function coneccionBaseDeDatos() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("BASE DE DATOS CONECTADA")  
    } catch (error) {
        console.log(error);       
    }   
}

coneccionBaseDeDatos()*/