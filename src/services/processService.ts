import clientRepository from "../repositories/clientRepository.js";
import processRepository, {
  Process,
} from "../repositories/processRepository.js";
import {
  badRequest,
  duplicateError,
  internalServerError,
  notFoundError,
} from "../utils/errors.js";
import { ProcessCreationInterface } from "../controllers/processController.js";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
dayjs.extend(customParseFormat);

async function findAll() {
  const search = await processRepository.findAll();
  return search;
}

async function findByNumber(number: string) {
  if (!number) throw badRequest("Number");

  const search = await processRepository.findByNumber(number);
  return search;
}

async function create(processData: ProcessCreationInterface) {
  const processSearch = await processRepository.findByNumber(
    processData.number
  );
  if (processSearch) throw duplicateError("Process number");

  const client = await clientRepository.findByCNPJ(processData.clientCNPJ);
  if (!client) throw notFoundError("Client");

  const dayJsDate = dayjs(processData.date, "DD/MM/YYYY");
  if (!dayJsDate.isValid()) throw badRequest("Date");
  processData.date = dayJsDate.toDate();

  const process = await processRepository.create(processData);
  if (!process) throw internalServerError();
}

async function sumAllProcesses(clientCNPJ: string) {
  if (clientCNPJ) {
    const client = await clientRepository.findByCNPJ(clientCNPJ);
    if (!client) throw notFoundError("client");
  }
  const sum = await processRepository.sumAllProcesses(clientCNPJ);

  return sum;
}

export default {
  findAll,
  findByNumber,
  create,
  sumAllProcesses,
};
