import { Router } from "express";
import clientRouter from "./clientRouter.js";

const router = Router();
router.use(clientRouter);

export default router;
