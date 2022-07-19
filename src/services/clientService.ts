import clientRepository, { Client } from "../repositories/clientRepository.js";
import { duplicateError } from "../utils/errors.js";

async function findAll() {
  const clients = await clientRepository.findAll();
  return clients;
}

async function createClient(clientData: Omit<Client, "id">) {
  const clientSearch = await clientRepository.findByCNPJ(clientData.cnpj);
  if (clientSearch) throw duplicateError("Client");

  return await clientRepository.createClient(clientData);
}

export default {
  findAll,
  createClient,
};
