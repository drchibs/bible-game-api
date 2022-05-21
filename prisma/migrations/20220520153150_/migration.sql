/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chapters` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verses` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PlayLog" DROP CONSTRAINT "PlayLog_playerId_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "chapters" INTEGER NOT NULL,
ADD COLUMN     "verses" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PlayLog" ALTER COLUMN "playerId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Book_name_key" ON "Book"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- AddForeignKey
ALTER TABLE "PlayLog" ADD CONSTRAINT "PlayLog_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
