import "dotenv/config.js"
import "../../config/database.js"
import Tienda from "../Tienda.js"
import Producto from "../Producto.js";
import Empleado from "../Empleado.js";

let empleados = [
    { name: "Alice Smith", position: "Manager", salary: 75000 },
    { name: "Bob Johnson", position: "Developer", salary: 60000 },
    { name: "Charlie Brown", position: "Designer", salary: 55000 },
    { name: "David Wilson", position: "Analyst", salary: 65000 },
    { name: "Eva Garcia", position: "Marketing Specialist", salary: 50000 },
    { name: "Frank Martinez", position: "Sales Representative", salary: 45000 },
    { name: "Grace Lee", position: "HR Coordinator", salary: 48000 },
    { name: "Henry Davis", position: "Data Scientist", salary: 90000 },
    { name: "Irene Rodriguez", position: "Product Manager", salary: 80000 },
    { name: "Jack Wilson", position: "Web Developer", salary: 62000 },
    { name: "Karen Taylor", position: "Accountant", salary: 55000 },
    { name: "Larry Anderson", position: "Support Specialist", salary: 42000 },
    { name: "Megan Thomas", position: "UI/UX Designer", salary: 58000 },
    { name: "Nathan White", position: "Business Analyst", salary: 67000 },
    { name: "Olivia Harris", position: "Content Writer", salary: 45000 }
];

Empleado.insertMany(empleados)