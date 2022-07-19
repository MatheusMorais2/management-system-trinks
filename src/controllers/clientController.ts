import { Request, Response } from "express";
import clientService from "../services/clientService.js";
import { Client } from "../repositories/clientRepository.js";

export async function createClient(req: Request, res: Response) {
  const clientData: Client = req.body;

  const response = await clientService.createClient(clientData);
  if (!response) res.send("Error creating client").status(500);

  return res.sendStatus(201);
}
