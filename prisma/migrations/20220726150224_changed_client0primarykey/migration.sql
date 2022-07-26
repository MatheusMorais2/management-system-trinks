/*
  Warnings:

  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "client" DROP CONSTRAINT "client_pkey",
ADD CONSTRAINT "client_pkey" PRIMARY KEY ("cnpj");
