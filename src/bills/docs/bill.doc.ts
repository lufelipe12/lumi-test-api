import { ApiProperty } from '@nestjs/swagger';

export class BillDoc {
  @ApiProperty({
    description: 'Bill id',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Reference for client is the number',
    example: '7005400387',
  })
  clientNumber: string;

  @ApiProperty({
    description: 'Reference month of bill',
    example: 'Janeiro',
  })
  month: string;

  @ApiProperty({
    description: 'Reference year of bill',
    example: 2023,
  })
  year: number;

  @ApiProperty({
    description: 'Electricity energy on kWh',
    example: 50,
  })
  electricity: number;

  @ApiProperty({
    description: 'Electricity energy on R$',
    example: 40.3,
  })
  electricityValue: number;

  @ApiProperty({
    description: 'Electrical Energy Compensation System on kWh',
    example: 370,
  })
  sceee: number;

  @ApiProperty({
    description: 'Electrical Energy Compensation System on R$',
    example: 186.84,
  })
  sceeeValue: number;

  @ApiProperty({
    description: 'Electrical Energy Compensated on kWh',
    example: 370,
  })
  compensatedEnergy: number;

  @ApiProperty({
    description: 'Electrical Energy Compensated on R$',
    example: 180.31,
  })
  compensatedEnergyValue: number;

  @ApiProperty({
    description: 'Public contribution in R$',
    example: 49.43,
  })
  contribution: number;

  @ApiProperty({
    description: 'Total bills price',
    example: 103.27,
  })
  total: number;

  @ApiProperty({
    description: 'The bill url on aws bucket.',
    example:
      'https://teste-pdfs.s3.amazonaws.com/3001165684-09-2023-684b3476-95-a97a-03c90c20e3e2.pdf',
  })
  billUrl: string;
}
