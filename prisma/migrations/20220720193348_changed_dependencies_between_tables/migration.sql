/*
  Warnings:

  - You are about to drop the column `clientId` on the `Process` table. All the data in the column will be lost.
  - Added the required column `clientCNPJ` to the `Process` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Process" DROP CONSTRAINT "Process_clientId_fkey";

-- AlterTable
ALTER TABLE "Process" DROP COLUMN "clientId",
ADD COLUMN     "clientCNPJ" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Process" ADD CONSTRAINT "Process_clientCNPJ_fkey" FOREIGN KEY ("clientCNPJ") REFERENCES "Client"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;
