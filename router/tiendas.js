import { Router } from "express";
import { allTiendas, storesByAddress,storesByName } from "../controllers/tiendas/read.js";
import { create,createMultiple } from "../controllers/tiendas/create.js";

const router = Router()

router.get("/all",allTiendas)
router.get("/address/:a",storesByAddress)
router.get("/name/:n",storesByName)

// Create

router.post("/create",create)
router.post("/create",createMultiple)

export default router;