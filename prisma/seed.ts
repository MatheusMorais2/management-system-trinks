import { prisma } from "../src/database.js";
import dayjs from "dayjs";

async function main() {
  console.log(dayjs("10/10/2007", "DD/MM/YYYY").toDate());
  await prisma.client.upsert({
    where: {
      cnpj: "00000000001",
    },
    update: {},
    create: {
      name: "Empresa A",
      cnpj: "00000000001",
      state: "Rio de Janeiro",
    },
  });

  await prisma.client.upsert({
    where: {
      cnpj: "00000000002",
    },
    update: {},
    create: {
      name: "Empresa B",
      cnpj: "00000000002",
      state: "São Paulo",
    },
  });

  await prisma.process.upsert({
    where: {
      number: "00001CIVELRJ",
    },
    update: {},
    create: {
      number: "00001CIVELRJ",
      clientCNPJ: "00000000001",
      state: "Rio de Janeiro",
      value: 20000000,
      date: dayjs("10/10/2007", "DD/MM/YYYY").toDate(),
      isActive: true,
    },
  });

  await prisma.process.upsert({
    where: {
      number: "00002CIVELSP",
    },
    update: {},
    create: {
      number: "00002CIVELSP",
      clientCNPJ: "00000000001",
      state: "São Paulo",
      value: 10000000,
      date: dayjs("20/10/2007", "DD/MM/YYYY").toDate(),
      isActive: true,
    },
  });

  await prisma.process.upsert({
    where: {
      number: "00003TRABM",
    },
    update: {},
    create: {
      number: "00003TRABM",
      value: 1000000,
      state: "Minas Gerais",
      date: dayjs("30/10/2007", "DD/MM/YYYY").toDate(),
      isActive: false,
      clientCNPJ: "00000000001",
    },
  });

  await prisma.process.upsert({
    where: {
      number: "00004CIVELRJ",
    },
    update: {},
    create: {
      number: "00004CIVELRJ",
      clientCNPJ: "00000000001",
      state: "Rio de Janeiro",
      value: 2000000,
      date: dayjs("10/11/2007", "DD/MM/YYYY").toDate(),
      isActive: false,
    },
  });

  await prisma.process.upsert({
    where: {
      number: "00005CIVELSP",
    },
    update: {},
    create: {
      number: "00005CIVELSP",
      clientCNPJ: "00000000001",
      state: "São Paulo",
      value: 3500000,
      date: dayjs("15/11/2007", "DD/MM/YYYY").toDate(),
      isActive: true,
    },
  });

  await prisma.process.upsert({
    where: {
      number: "00006CIVELRJ",
    },
    update: {},
    create: {
      number: "00006CIVELRJ",
      clientCNPJ: "00000000002",
      state: "Rio de Janeiro",
      value: 2000000,
      date: dayjs("1/5/2007", "DD/MM/YYYY").toDate(),
      isActive: true,
    },
  });

  await prisma.process.upsert({
    where: {
      number: "00007CIVELRJ",
    },
    update: {},
    create: {
      number: "00007CIVELRJ",
      clientCNPJ: "00000000002",
      state: "Rio de Janeiro",
      value: 70000000,
      date: dayjs("2/6/2007", "DD/MM/YYYY").toDate(),
      isActive: true,
    },
  });

  await prisma.process.upsert({
    where: {
      number: "00008CIVELSP",
    },
    update: {},
    create: {
      number: "00008CIVELSP",
      clientCNPJ: "00000000002",
      state: "São Paulo",
      value: 50000,
      date: dayjs("3/7/2007", "DD/MM/YYYY").toDate(),
      isActive: false,
    },
  });

  await prisma.process.upsert({
    where: {
      number: "00009CIVELSP",
    },
    update: {},
    create: {
      number: "00009CIVELSP",
      clientCNPJ: "00000000002",
      state: "São Paulo",
      value: 3200000,
      date: dayjs("4/8/2007", "DD/MM/YYYY").toDate(),
      isActive: true,
    },
  });

  await prisma.process.upsert({
    where: {
      number: "00010TRABAM",
    },
    update: {},
    create: {
      number: "00010TRABAM",
      clientCNPJ: "00000000002",
      state: "Amazonas",
      value: 100000,
      date: dayjs("5/9/2007", "DD/MM/YYYY").toDate(),
      isActive: false,
    },
  });
  console.log("chegou no ultimo main");
}

main()
  .catch((e) => {
    console.log("chegou no catch");
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
