import { ProcessCreationInterface } from "../controllers/processController.js";
import { prisma } from "../database.js";
import { Client } from "./clientRepository.js";

export interface Process {
  id: number;
  number: string;
  value: number;
  state: string;
  date: Date;
  isActive: boolean;
  Client: Client;
  clientId: number;
}

async function findAll() {
  return prisma.process.findMany();
}

async function findByNumber(number: string) {
  return await prisma.process.findUnique({
    where: {
      number,
    },
  });
}

async function findProcesses(selector) {
  return prisma.process.findMany({ ...selector });
}

async function findProcessesByClient(selector) {
  return prisma.client.findMany({
    include: {
      process: { where: selector },
    },
  });
}

async function create(processData: ProcessCreationInterface) {
  const process = await prisma.process.create({
    data: {
      number: processData.number,
      value: processData.value,
      state: processData.state,
      date: processData.date,
      isActive: processData.isActive,
      clientCNPJ: processData.clientCNPJ,
    },
  });
  return process;
}

async function sumProcesses(selector) {
  const sum = await prisma.process.aggregate({ ...selector });
  return sum;
}

async function averageProcesses(selector) {
  const average = await prisma.process.aggregate({ ...selector });
  return average;
}

async function countProcesses(selector) {
  const count = await prisma.process.count({ ...selector });
  return count;
}

export default {
  findAll,
  findByNumber,
  findProcesses,
  findProcessesByClient,
  create,
  sumProcesses,
  averageProcesses,
  countProcesses,
};
