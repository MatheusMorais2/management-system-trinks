/*
  Warnings:

  - You are about to alter the column `number` on the `Process` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(14)`.

*/
-- AlterTable
ALTER TABLE "Process" ALTER COLUMN "number" SET DATA TYPE VARCHAR(14);
