-- CreateTable
CREATE TABLE "Bill" (
    "id" SERIAL NOT NULL,
    "clientNumber" BIGINT NOT NULL,
    "clientName" VARCHAR(128) NOT NULL,
    "month" VARCHAR(32) NOT NULL,
    "year" INTEGER NOT NULL,
    "electricity" INTEGER NOT NULL,
    "sceee" INTEGER NOT NULL,
    "compensatedEnergy" INTEGER NOT NULL,
    "contribution" INTEGER NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "currentValue" INTEGER NOT NULL,
    "consumption" INTEGER NOT NULL,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);
