import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBillDto {
  @IsNumber()
  @IsNotEmpty()
  clientNumber: number;

  @IsString()
  @IsNotEmpty()
  clientName: string;

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
  sceee: number;

  @IsNumber()
  @IsNotEmpty()
  compensatedEnergy: number;

  @IsNumber()
  @IsNotEmpty()
  contribution: number;

  @IsNumber()
  @IsNotEmpty()
  total: number;

  @IsNumber()
  @IsNotEmpty()
  currentValue: number;

  @IsNumber()
  @IsNotEmpty()
  consumption: number;
}
