import "dotenv/config.js"
import "../../config/database.js"
import Tienda from "../Tienda.js"

const tiendas = [
    { name: "Walmart", address: "123 Fake Street", phone: 1234567890 },
    { name: "Costco", address: "742 Evergreen Terrace", phone: 9876543210 },
    { name: "Sam's Club", address: "456 Sun Boulevard", phone: 3216549870 },
    { name: "Soriana", address: "101 Main Plaza", phone: 4561237890 },
    { name: "Chedraui", address: "202 River Street", phone: 6547893210 },
    { name: "Bodega Aurrerá", address: "303 Reforma Avenue", phone: 7894561230 },
    { name: "Liverpool", address: "404 Peace Street", phone: 1597534862 },
    { name: "El Palacio de Hierro", address: "505 Fir Street", phone: 7531598462 },
    { name: "OXXO", address: "606 Freedom Street", phone: 8523697410 },
    { name: "7-Eleven", address: "707 Lily Avenue", phone: 9517534862 }
];

Tienda.insertMany(tiendas)
