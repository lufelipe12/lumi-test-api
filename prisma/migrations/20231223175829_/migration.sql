/*
  Warnings:

  - You are about to alter the column `total` on the `Bill` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `compensatedEnergyValue` on the `Bill` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `electricityValue` on the `Bill` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `sceeeValue` on the `Bill` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "Bill" ALTER COLUMN "total" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "compensatedEnergyValue" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "electricityValue" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "sceeeValue" SET DATA TYPE DECIMAL(10,2);
