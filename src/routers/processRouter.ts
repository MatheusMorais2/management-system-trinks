import { Router } from "express";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import {
  averageProcesses,
  countProcesses,
  createProcess,
  findProcesses,
  findProcessesByClient,
  sumProcesses,
} from "../controllers/processController.js";
import processCreationSchema from "../schemas/processCreationSchema.js";

const processRouter = Router();

processRouter.post(
  "/process",
  schemaValidationMiddleware(processCreationSchema),
  createProcess
);
processRouter.get("/process/sum", sumProcesses);
processRouter.get("/process/average", averageProcesses);
processRouter.get("/process/", findProcesses);
processRouter.get("/process/client", findProcessesByClient);
processRouter.get("/process/count", countProcesses);

export default processRouter;
