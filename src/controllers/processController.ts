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

export async function sumProcesses(req: Request, res: Response) {
  const selectors = req.query;

  const sum = await processService.sumProcesses(selectors);
  return res.status(200).send(sum);
}

export async function averageProcesses(req: Request, res: Response) {
  const selectors = req.query;

  const average = await processService.averageProcesses(selectors);
  return res.status(200).send(average);
}

export async function findProcesses(req: Request, res: Response) {
  const selectors = req.query;

  const search = await processService.findProcesses(selectors);
  return res.status(200).send(search);
}

export async function findProcessesByClient(req: Request, res: Response) {
  const selectors = req.query;

  const search = await processService.findProcessesByClient(selectors);
  return res.status(200).send(search);
}

export async function countProcesses(req: Request, res: Response) {
  const selectors = req.query;

  const count = await processService.countProcesses(selectors);
  return res.send(count).status(200);
}
