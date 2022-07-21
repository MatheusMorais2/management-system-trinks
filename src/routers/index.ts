import { Router } from "express";
import clientRouter from "./clientRouter.js";
import processRouter from "./processRouter.js";

const router = Router();
router.use(clientRouter);
router.use(processRouter);

export default router;
