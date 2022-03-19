/*
  Warnings:

  - Added the required column `content` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "News" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "potrait" TEXT,
ADD COLUMN     "wide" TEXT;
