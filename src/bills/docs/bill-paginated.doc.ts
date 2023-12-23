import { ApiProperty } from '@nestjs/swagger';
import { BillDoc } from './bill.doc';

export class BillPaginatedDoc {
  @ApiProperty({
    description: 'Current selected page by query',
    example: 2,
  })
  currentPage: number;

  @ApiProperty({
    description: 'Max items per page',
    example: 5,
  })
  pageSize: number;

  @ApiProperty({
    description: 'Count of items on selected page',
    example: 1,
  })
  quantity: number;

  @ApiProperty({
    type: [BillDoc],
  })
  data: BillDoc[];
}
