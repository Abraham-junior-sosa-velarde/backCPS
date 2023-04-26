import { Router } from "express";
import * as company from "../controllers/company.controller";
const router = Router();

//inicio de sesion
router.get("/companies", company.getAllCompanies);
export default router;
