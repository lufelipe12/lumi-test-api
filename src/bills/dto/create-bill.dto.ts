import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBillDto {
  @IsNumber()
  @IsNotEmpty()
  clientNumber: string;

  @IsString()
  @IsNotEmpty()
  month: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber()
  @IsNotEmpty()
  electricity: number;

  @IsNumber()
  @IsNotEmpty()
  electricityValue: number;

  @IsNumber()
  @IsNotEmpty()
  sceee: number;

  @IsNumber()
  @IsNotEmpty()
  sceeeValue: number;

  @IsNumber()
  @IsNotEmpty()
  compensatedEnergy: number;

  @IsNumber()
  @IsNotEmpty()
  compensatedEnergyValue: number;

  @IsNumber()
  @IsNotEmpty()
  contribution: number;

  @IsNumber()
  @IsNotEmpty()
  total: number;

  @IsString()
  @IsNotEmpty()
  billUrl: string;
}
