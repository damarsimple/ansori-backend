/*
  Warnings:

  - Added the required column `type` to the `Donation` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DonationType" AS ENUM ('Infaq', 'Sedekah', 'Zakat_Mal', 'Zakat_Fitrah', 'Yatim_Piatu');

-- AlterTable
ALTER TABLE "Donation" ADD COLUMN     "hideName" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "type" "DonationType" NOT NULL;
