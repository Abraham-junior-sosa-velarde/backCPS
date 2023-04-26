import { Router } from "express";
import * as MonthlyForm from "../controllers/MonthlyForm.controller";
const router = Router();

//inicio de sesion
router.post("/create", MonthlyForm.createMonthlyForm);
router.get("/getStatics", MonthlyForm.getMonthlyForm);

export default router;
