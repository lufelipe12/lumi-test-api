/*
  Warnings:

  - You are about to drop the `Bill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Bill";

-- CreateTable
CREATE TABLE "bill" (
    "id" SERIAL NOT NULL,
    "clientNumber" TEXT NOT NULL,
    "month" VARCHAR(32) NOT NULL,
    "year" INTEGER NOT NULL,
    "electricity" INTEGER NOT NULL,
    "electricityValue" DECIMAL(10,2) NOT NULL,
    "sceee" INTEGER NOT NULL,
    "sceeeValue" DECIMAL(10,2) NOT NULL,
    "compensatedEnergy" INTEGER NOT NULL,
    "compensatedEnergyValue" DECIMAL(10,2) NOT NULL,
    "contribution" DECIMAL(10,2) NOT NULL,
    "total" DECIMAL(10,2) NOT NULL,
    "billUrl" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "bill_pkey" PRIMARY KEY ("id")
);
