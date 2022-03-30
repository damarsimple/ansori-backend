/*
  Warnings:

  - Added the required column `accountName` to the `DonationAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DonationAccount" ADD COLUMN     "accountName" TEXT NOT NULL;
