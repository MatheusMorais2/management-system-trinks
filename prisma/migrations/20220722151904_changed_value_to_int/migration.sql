/*
  Warnings:

  - You are about to alter the column `value` on the `Process` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Process" ALTER COLUMN "value" SET DATA TYPE INTEGER;
