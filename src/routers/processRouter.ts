import { Router } from "express";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import errorHandlingMiddleware from "../middlewares/errorHandlingMiddleware.js";
import {
  createProcess,
  sumAllProcesses,
} from "../controllers/processController.js";
import processCreationSchema from "../schemas/processCreationSchema.js";

const processRouter = Router();

processRouter.post(
  "/process",
  schemaValidationMiddleware(processCreationSchema),
  createProcess
);
processRouter.get("/process/sum", sumAllProcesses);

export default processRouter;
