/*
  Warnings:

  - You are about to drop the column `consumption` on the `Bill` table. All the data in the column will be lost.
  - You are about to drop the column `currentValue` on the `Bill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bill" DROP COLUMN "consumption",
DROP COLUMN "currentValue";
