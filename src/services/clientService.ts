import clientRepository, { Client } from "../repositories/clientRepository.js";
import { duplicateError, internalServerError } from "../utils/errors.js";

async function findAll() {
  const clients = await clientRepository.findAll();
  return clients;
}

async function createClient(clientData: Omit<Client, "id">) {
  const clientSearch = await clientRepository.findByCNPJ(clientData.cnpj);
  if (clientSearch) throw duplicateError("Client");

  const client = await clientRepository.createClient(clientData);
  if (!client) throw internalServerError();
}

export default {
  findAll,
  createClient,
};
