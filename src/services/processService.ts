import clientRepository from "../repositories/clientRepository.js";
import processRepository from "../repositories/processRepository.js";
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
import {
  QuerySelectors,
  selectorBuilding,
  SumSelectors,
  AvgSelectors,
} from "../utils/selectorBuilding.js";
import formatCurrency from "../utils/formatCurrency.js";

async function findAll() {
  const search = await processRepository.findAll();
  return search;
}

async function findByNumber(number: string) {
  if (!number) throw badRequest("Number");

  const search = await processRepository.findByNumber(number);
  return search;
}

async function findProcesses(querySelectors: QuerySelectors) {
  if (querySelectors.clientCNPJ) verifyClient(querySelectors.clientCNPJ);
  const whereSelectors = selectorBuilding(querySelectors);
  const search = await processRepository.findProcesses({
    where: whereSelectors,
  });
  return search;
}

async function findProcessesByClient(querySelectors: QuerySelectors) {
  if (querySelectors.clientCNPJ) verifyClient(querySelectors.clientCNPJ);
  const whereSelectors = selectorBuilding(querySelectors);
  const search = await processRepository.findProcessesByClient(whereSelectors);
  return search;
}

async function create(processData: ProcessCreationInterface) {
  const processSearch = await processRepository.findByNumber(
    processData.number
  );
  if (processSearch) throw duplicateError("Process number");

  verifyClient(processData.clientCNPJ);

  const dayJsDate = dayjs(processData.date, "DD/MM/YYYY");
  if (!dayJsDate.isValid()) throw badRequest("Date");
  processData.date = dayJsDate.toDate();

  const process = await processRepository.create(processData);
  if (!process) throw internalServerError();
}

async function sumProcesses(querySelectors: QuerySelectors) {
  if (querySelectors.clientCNPJ) verifyClient(querySelectors.clientCNPJ);

  let operationSelector: SumSelectors = {
    _sum: {
      value: true,
    },
  };

  const whereSelectors = selectorBuilding(querySelectors);
  operationSelector = { ...operationSelector, where: whereSelectors };

  const sum = await processRepository.sumProcesses(operationSelector);

  return formatCurrency(sum._sum.value);
}

async function averageProcesses(querySelectors: QuerySelectors) {
  if (querySelectors.clientCNPJ) verifyClient(querySelectors.clientCNPJ);
  let operationSelector: AvgSelectors = {
    _avg: {
      value: true,
    },
  };

  const whereSelectors = selectorBuilding(querySelectors);
  operationSelector = { ...operationSelector, where: whereSelectors };

  const average = await processRepository.averageProcesses(operationSelector);

  return formatCurrency(average._avg.value);
}

async function verifyClient(clientCNPJ: string) {
  const client = await clientRepository.findByCNPJ(clientCNPJ);
  if (!client) throw notFoundError("client");
}

async function countProcesses(querySelectors: QuerySelectors) {
  if (querySelectors.clientCNPJ) verifyClient(querySelectors.clientCNPJ);

  const whereSelectors = selectorBuilding(querySelectors);
  const count = await processRepository.countProcesses({
    where: whereSelectors,
  });
  return { count };
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
