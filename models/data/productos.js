import "dotenv/config.js"
import "../../config/database.js"
import Tienda from "../Tienda.js"
import Producto from "../Producto.js";

let productos = [
    { name: "T-Shirt", brand: "Nike", type: "Clothing", price: 25 },
    { name: "Sneakers", brand: "Adidas", type: "Footwear", price: 70 },
    { name: "Jeans", brand: "Levi's", type: "Clothing", price: 50 },
    { name: "Watch", brand: "Casio", type: "Accessory", price: 30 },
    { name: "Headphones", brand: "Sony", type: "Electronics", price: 100 },
    { name: "Laptop", brand: "Dell", type: "Electronics", price: 800 },
    { name: "Smartphone", brand: "Samsung", type: "Electronics", price: 600 },
    { name: "Camera", brand: "Canon", type: "Electronics", price: 400 },
    { name: "Perfume", brand: "Chanel", type: "Cosmetics", price: 120 },
    { name: "Shampoo", brand: "Pantene", type: "Cosmetics", price: 10 },
    { name: "Cream", brand: "Nivea", type: "Cosmetics", price: 15 },
    { name: "Bicycle", brand: "Giant", type: "Sports", price: 500 },
    { name: "Soccer Ball", brand: "Adidas", type: "Sports", price: 30 },
    { name: "Swimsuit", brand: "Speedo", type: "Clothing", price: 40 },
    { name: "Sunglasses", brand: "Ray-Ban", type: "Accessory", price: 150 },
    { name: "Tablet", brand: "Apple", type: "Electronics", price: 400 },
    { name: "Speaker", brand: "JBL", type: "Electronics", price: 150 },
    { name: "Backpack", brand: "North Face", type: "Accessory", price: 80 },
    { name: "Jacket", brand: "Columbia", type: "Clothing", price: 100 },
    { name: "Charger", brand: "Anker", type: "Electronics", price: 20 },
    { name: "Lamp", brand: "Philips", type: "Home", price: 45 },
    { name: "Sofa", brand: "IKEA", type: "Furniture", price: 600 },
    { name: "Table", brand: "IKEA", type: "Furniture", price: 200 },
    { name: "Chair", brand: "Herman Miller", type: "Furniture", price: 400 },
    { name: "Mirror", brand: "IKEA", type: "Home", price: 30 },
    { name: "Refrigerator", brand: "LG", type: "Appliances", price: 1000 },
    { name: "Oven", brand: "Whirlpool", type: "Appliances", price: 500 },
    { name: "Coffee Maker", brand: "Nespresso", type: "Appliances", price: 150 },
    { name: "Washing Machine", brand: "Samsung", type: "Appliances", price: 800 },
    { name: "Television", brand: "Sony", type: "Electronics", price: 700 },
    { name: "Sound System", brand: "Bose", type: "Electronics", price: 400 },
    { name: "Remote Control", brand: "Logitech", type: "Electronics", price: 100 },
    { name: "Toy", brand: "LEGO", type: "Toys", price: 60 },
    { name: "Video Game", brand: "Nintendo", type: "Video Games", price: 60 },
    { name: "Console", brand: "PlayStation", type: "Video Games", price: 500 },
    { name: "Action Camera", brand: "GoPro", type: "Electronics", price: 300 },
    { name: "Tripod", brand: "Manfrotto", type: "Accessory", price: 80 },
    { name: "Blender", brand: "KitchenAid", type: "Appliances", price: 200 },
    { name: "Toaster", brand: "Breville", type: "Appliances", price: 120 },
    { name: "Cookware Set", brand: "Tefal", type: "Kitchen", price: 80 },
    { name: "Knives", brand: "Wüsthof", type: "Kitchen", price: 100 },
    { name: "Dinnerware Set", brand: "Corelle", type: "Home", price: 150 },
    { name: "Bed Sheets", brand: "AmazonBasics", type: "Home", price: 60 },
    { name: "Towels", brand: "Bamboo", type: "Home", price: 40 },
    { name: "Lawn Mower", brand: "Honda", type: "Garden", price: 500 },
    { name: "Axe", brand: "Fiskars", type: "Garden", price: 40 },
    { name: "Hose", brand: "Gardena", type: "Garden", price: 30 },
    { name: "Barbecue", brand: "Weber", type: "Garden", price: 400 },
    { name: "Tent", brand: "Coleman", type: "Camping", price: 100 },
    { name: "Sleeping Bag", brand: "Marmot", type: "Camping", price: 120 },
    { name: "Flashlight", brand: "Maglite", type: "Camping", price: 50 },
    { name: "Water Bottle", brand: "Nalgene", type: "Camping", price: 15 },
    { name: "Scanner", brand: "Epson", type: "Electronics", price: 200 },
    { name: "Printer", brand: "HP", type: "Electronics", price: 150 },
    { name: "Gaming Laptop", brand: "Asus", type: "Electronics", price: 1200 },
    { name: "Monitor", brand: "Dell", type: "Electronics", price: 300 },
    { name: "Mouse", brand: "Logitech", type: "Electronics", price: 50 },
    { name: "Keyboard", brand: "Corsair", type: "Electronics", price: 100 },
    { name: "Cooling System", brand: "Cooler Master", type: "Electronics", price: 70 },
    { name: "Motherboard", brand: "ASUS", type: "Electronics", price: 150 },
    { name: "Graphics Card", brand: "NVIDIA", type: "Electronics", price: 500 },
    { name: "Processor", brand: "Intel", type: "Electronics", price: 300 },
    { name: "RAM", brand: "Corsair", type: "Electronics", price: 100 },
    { name: "Hard Drive", brand: "Seagate", type: "Electronics", price: 80 },
    { name: "SSD", brand: "Samsung", type: "Electronics", price: 120 },
    { name: "Solar Charger", brand: "Anker", type: "Electronics", price: 60 },
    { name: "Phone Case", brand: "OtterBox", type: "Accessory", price: 40 },
    { name: "Screen Protector", brand: "ZAGG", type: "Accessory", price: 20 },
    { name: "Phone Stand", brand: "Spigen", type: "Accessory", price: 25 },
    { name: "Power Bank", brand: "RAVPower", type: "Electronics", price: 50 },
    { name: "Security Camera", brand: "Ring", type: "Electronics", price: 200 },
    { name: "Alarm System", brand: "SimpliSafe", type: "Electronics", price: 300 },
    { name: "Smart Thermometer", brand: "Withings", type: "Health", price: 100 },
    { name: "Smartwatch", brand: "Apple", type: "Electronics", price: 400 },
    { name: "Basketball", brand: "Spalding", type: "Sports", price: 30 },
    { name: "Scooter", brand: "Razor", type: "Sports", price: 60 },
    { name: "Tennis Racket", brand: "Wilson", type: "Sports", price: 100 },
    { name: "Gym Equipment", brand: "Bowflex", type: "Sports", price: 600 },
    { name: "Office Chair", brand: "Herman Miller", type: "Furniture", price: 800 },
    { name: "Desk", brand: "IKEA", type: "Furniture", price: 250 },
    { name: "Guitar", brand: "Yamaha", type: "Music", price: 200 },
    { name: "Piano", brand: "Casio", type: "Music", price: 400 },
    { name: "Microphone", brand: "Shure", type: "Music", price: 100 },
    { name: "Bluetooth Speakers", brand: "Bose", type: "Electronics", price: 250 },
    { name: "Drone", brand: "DJI", type: "Electronics", price: 1000 },
    { name: "Wireless Charger", brand: "Anker", type: "Electronics", price: 30 },
    { name: "MIDI Keyboard", brand: "M-Audio", type: "Music", price: 100 },
    { name: "DJ Controller", brand: "Pioneer", type: "Music", price: 200 },
    { name: "Guitar Pick", brand: "Gibson", type: "Music", price: 40 },
    { name: "Flute", brand: "Yamaha", type: "Music", price: 150 },
    { name: "Electronic Drum Kit", brand: "Alesis", type: "Music", price: 300 },
    { name: "Yoga Mat", brand: "Liforme", type: "Fitness", price: 70 },
    { name: "Hiking Boots", brand: "Merrell", type: "Footwear", price: 120 },
    { name: "Bluetooth Headset", brand: "Plantronics", type: "Electronics", price: 80 },
    { name: "Electric Kettle", brand: "Hamilton Beach", type: "Appliances", price: 40 },
    { name: "Smart Light Bulb", brand: "Philips Hue", type: "Home", price: 30 },
    { name: "Air Fryer", brand: "Ninja", type: "Appliances", price: 150 },
    { name: "Portable Charger", brand: "RAVPower", type: "Electronics", price: 35 },
    { name: "Board Game", brand: "Hasbro", type: "Toys", price: 30 },
    { name: "Action Figure", brand: "Funko", type: "Toys", price: 15 }
];

Producto.insertMany(productos)