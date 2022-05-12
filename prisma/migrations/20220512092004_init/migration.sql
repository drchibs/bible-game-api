-- CreateEnum
CREATE TYPE "Testament" AS ENUM ('OLD', 'NEW');

-- CreateEnum
CREATE TYPE "GameType" AS ENUM ('QUICK_GAME', 'PILGRIM_PROGRESS');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CONTRIBUTOR', 'PLAYER');

-- CreateEnum
CREATE TYPE "Group" AS ENUM ('PENTATEUCH', 'HISTORICAL', 'POETIC', 'PSALMS', 'PROPHETS', 'GOSPELS', 'EPISTLES');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "highScore" INTEGER NOT NULL DEFAULT 0,
    "role" "Role" NOT NULL DEFAULT E'PLAYER',
    "countryId" INTEGER,
    "rankId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameBank" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "bookId" INTEGER NOT NULL,
    "chapter" TEXT NOT NULL,
    "verse" TEXT[],
    "difficultyId" INTEGER NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GameBank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameDifficulty" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GameDifficulty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayLog" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "playerId" INTEGER NOT NULL,
    "gameType" "GameType" NOT NULL DEFAULT E'QUICK_GAME',
    "totalScore" INTEGER NOT NULL DEFAULT 0,
    "baseScore" INTEGER NOT NULL DEFAULT 0,
    "bonusScore" INTEGER NOT NULL DEFAULT 0,
    "averageTimeSpent" INTEGER NOT NULL DEFAULT 0,
    "numberOfCorrectAnswers" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "testament" "Testament" NOT NULL,
    "group" "Group" NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameBank" ADD CONSTRAINT "GameBank_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "GameDifficulty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameBank" ADD CONSTRAINT "GameBank_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayLog" ADD CONSTRAINT "PlayLog_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
