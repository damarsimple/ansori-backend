/*
  Warnings:

  - Added the required column `cityName` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shareCountMap` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Donation" ADD COLUMN     "cityName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "shareCountMap" JSONB NOT NULL;
