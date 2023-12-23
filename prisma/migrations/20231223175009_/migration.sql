/*
  Warnings:

  - Added the required column `compensatedEnergyValue` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `electricityValue` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sceeeValue` to the `Bill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bill" ADD COLUMN     "compensatedEnergyValue" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "electricityValue" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "sceeeValue" DECIMAL(65,30) NOT NULL;
