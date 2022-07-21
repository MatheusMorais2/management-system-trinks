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

type Sum = {
  _sum: {
    value: BigInt;
  };
};

async function sumAllProcesses(clientCNPJ: string) {
  let sum: Sum;

  if (clientCNPJ) {
    sum = await prisma.process.aggregate({
      where: {
        clientCNPJ,
      },
      _sum: {
        value: true,
      },
    });
  } else {
    sum = await prisma.process.aggregate({
      _sum: {
        value: true,
      },
    });
  }

  return sum._sum.value.toString();
}

export default {
  findAll,
  findByNumber,
  create,
  sumAllProcesses,
};
