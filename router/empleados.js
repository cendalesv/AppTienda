import { Router } from "express";
import {allEmpleados,employeesByPosition,employeesbyname} from "../controllers/empleado/read.js";
import { create, createMultiple } from "../controllers/empleado/create.js";

const router = Router()

router.get("/all",allEmpleados)
router.get("/position/:p",employeesByPosition)
router.get("/name/:n",employeesbyname)

// Create

router.post("/create",create)
router.post("/create",createMultiple)

export default router