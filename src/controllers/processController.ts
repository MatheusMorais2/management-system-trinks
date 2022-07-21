import { Request, Response } from "express";
import { Process } from "../repositories/processRepository.js";
import processService from "../services/processService.js";

export interface ProcessCreationInterface
  extends Omit<Process, "id" | "clientId" | "Client"> {
  clientCNPJ: string;
}

export async function createProcess(req: Request, res: Response) {
  const processData: ProcessCreationInterface = req.body;

  await processService.create(processData);
  return res.sendStatus(201);
}

export async function sumAllProcesses(req: Request, res: Response) {
  const clientCNPJ: string = req.query.cnpj.toString();
  const sum = await processService.sumAllProcesses(clientCNPJ);
  return res.status(200).send(sum);
}
