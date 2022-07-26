/*
  Warnings:

  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `clientId` on the `process` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "process" DROP CONSTRAINT "process_clientCNPJ_clientId_fkey";

-- DropIndex
DROP INDEX "client_cnpj_id_key";

-- AlterTable
ALTER TABLE "client" DROP CONSTRAINT "client_pkey",
ADD CONSTRAINT "client_pkey" PRIMARY KEY ("cnpj");

-- AlterTable
ALTER TABLE "process" DROP COLUMN "clientId",
ALTER COLUMN "clientCNPJ" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "process" ADD CONSTRAINT "process_clientCNPJ_fkey" FOREIGN KEY ("clientCNPJ") REFERENCES "client"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;
