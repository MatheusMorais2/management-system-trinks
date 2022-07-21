import { Request, Response } from "express";
import clientService from "../services/clientService.js";
import { Client } from "../repositories/clientRepository.js";

export async function createClient(req: Request, res: Response) {
  const clientData: Client = req.body;

  await clientService.createClient(clientData);

  return res.sendStatus(201);
}
