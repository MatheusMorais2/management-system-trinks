import { prisma } from "../database.js";

export interface Client {
  id: number;
  cnpj: string;
  name: string;
  state: string;
}

async function findAll() {
  return prisma.client.findMany();
}

async function findByCNPJ(cnpj: string) {
  const client = await prisma.client.findUnique({
    where: {
      cnpj: cnpj,
    },
  });

  return client;
}

async function createClient(clientData: Omit<Client, "id">) {
  return await prisma.client.create({
    data: {
      name: clientData.name,
      cnpj: clientData.cnpj,
      state: clientData.state,
    },
  });
}

export default {
  findAll,
  findByCNPJ,
  createClient,
};
