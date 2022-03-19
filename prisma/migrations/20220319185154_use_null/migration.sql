/*
  Warnings:

  - Made the column `message` on table `Donation` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Donation" ALTER COLUMN "message" SET NOT NULL,
ALTER COLUMN "message" SET DEFAULT E'';
