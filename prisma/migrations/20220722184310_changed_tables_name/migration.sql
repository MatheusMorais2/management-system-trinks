/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Process` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Process" DROP CONSTRAINT "Process_clientCNPJ_fkey";

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "Process";

-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "process" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "clientCNPJ" TEXT NOT NULL,

    CONSTRAINT "process_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_cnpj_key" ON "client"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "process_number_key" ON "process"("number");

-- AddForeignKey
ALTER TABLE "process" ADD CONSTRAINT "process_clientCNPJ_fkey" FOREIGN KEY ("clientCNPJ") REFERENCES "client"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;
