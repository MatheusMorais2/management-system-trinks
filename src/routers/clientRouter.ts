import { Router } from "express";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import { createClient } from "../controllers/clientController.js";
import clientCreationSchema from "../schemas/clientCreationSchema.js";

const clientRouter = Router();

clientRouter.get("/", createClient);
clientRouter.post(
  "/client",
  schemaValidationMiddleware(clientCreationSchema),
  createClient
);

export default clientRouter;
