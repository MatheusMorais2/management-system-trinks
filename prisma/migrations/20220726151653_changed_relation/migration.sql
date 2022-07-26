/*
  Warnings:

  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `clientCNPJ` on the `process` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "process" DROP CONSTRAINT "process_clientCNPJ_fkey";

-- AlterTable
ALTER TABLE "client" DROP CONSTRAINT "client_pkey",
ADD CONSTRAINT "client_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "process" DROP COLUMN "clientCNPJ",
ADD COLUMN     "clientId" SERIAL NOT NULL;

-- AddForeignKey
ALTER TABLE "process" ADD CONSTRAINT "process_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
