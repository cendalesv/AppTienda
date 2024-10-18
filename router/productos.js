import { Router } from "express";
import {allProductos,productByBrand,productByName} from "../controllers/producto/read.js";
import { create,createMultiple } from "../controllers/producto/create.js";

const router = Router()

router.get("/all",allProductos)
router.get("/brand/:b",productByBrand)
router.get("/name/:n",productByName)

// Create

router.post("/create",create)
router.post("/create",createMultiple)

export default router