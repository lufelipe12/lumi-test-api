import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { BillsService } from './bills.service';
import { BillDoc } from './docs/bill.doc';
import { BillPaginatedDoc } from './docs/bill-paginated.doc';

@Controller('bills')
@ApiTags('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post()
  @ApiResponse({
    type: BillDoc,
  })
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file: Express.Multer.File) {
    return await this.billsService.create(file);
  }

  @Get()
  @ApiResponse({
    type: BillPaginatedDoc,
  })
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 5,
    @Query('clientNumber') clientNumber?: string,
    @Query('month') month?: string,
  ) {
    return await this.billsService.findAll(page, limit, clientNumber, month);
  }

  @Get(':id')
  @ApiResponse({
    type: BillDoc,
  })
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return await this.billsService.findOne(+id);
  }
}
