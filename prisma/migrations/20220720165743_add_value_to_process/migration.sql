/*
  Warnings:

  - Added the required column `value` to the `Process` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Process" ADD COLUMN     "value" TEXT NOT NULL,
ALTER COLUMN "number" SET DATA TYPE TEXT;
