import { Request, Response, NextFunction } from "express";
import { badRequest } from "../utils/errors.js";

export function schemaValidationMiddleware(schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);

    if (validation.error) {
      return res.status(400).send(validation.error.details[0].message);
    }
    next();
  };
}
