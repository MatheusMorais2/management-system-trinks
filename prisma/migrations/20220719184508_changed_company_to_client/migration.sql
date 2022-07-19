/*
  Warnings:

  - You are about to drop the column `companyId` on the `Process` table. All the data in the column will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `clientId` to the `Process` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Process" DROP CONSTRAINT "Process_companyId_fkey";

-- AlterTable
ALTER TABLE "Process" DROP COLUMN "companyId",
ADD COLUMN     "clientId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Company";

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_cnpj_key" ON "Client"("cnpj");

-- AddForeignKey
ALTER TABLE "Process" ADD CONSTRAINT "Process_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
