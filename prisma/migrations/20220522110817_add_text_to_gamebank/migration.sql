/*
  Warnings:

  - Added the required column `text` to the `GameBank` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GameBank" ADD COLUMN     "text" TEXT NOT NULL;
