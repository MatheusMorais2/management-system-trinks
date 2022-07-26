/*
  Warnings:

  - A unique constraint covering the columns `[cnpj,id]` on the table `client` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "process" DROP CONSTRAINT "process_clientId_fkey";

-- AlterTable
ALTER TABLE "process" ADD COLUMN     "clientCNPJ" TEXT NOT NULL DEFAULT E'ala',
ALTER COLUMN "clientId" DROP DEFAULT;
DROP SEQUENCE "process_clientId_seq";

-- CreateIndex
CREATE UNIQUE INDEX "client_cnpj_id_key" ON "client"("cnpj", "id");

-- AddForeignKey
ALTER TABLE "process" ADD CONSTRAINT "process_clientCNPJ_clientId_fkey" FOREIGN KEY ("clientCNPJ", "clientId") REFERENCES "client"("cnpj", "id") ON DELETE RESTRICT ON UPDATE CASCADE;
