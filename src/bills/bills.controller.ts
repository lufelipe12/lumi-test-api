import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  Query,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { BillsService } from './bills.service';
import { BillDoc } from './docs/bill.doc';
import { BillPaginatedDoc } from './docs/bill-paginated.doc';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Response } from 'express';
import multerConfig from '@infra/aws/multer.config';

@Controller('bills')
@ApiTags('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post()
  @ApiResponse({
    type: BillDoc,
  })
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async create(@UploadedFile() file: Express.MulterS3.File) {
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

  @Get('download/:id')
  getFile(
    @Res({ passthrough: true }) res: Response,
    @Param('id', ParseIntPipe) id: number,
  ): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), '3000055479-08-2023.pdf'),
    );
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="3000055479-08-2023.pdf"',
    });

    return new StreamableFile(file);
  }

  @Get(':id')
  @ApiResponse({
    type: BillDoc,
  })
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return await this.billsService.findOne(+id);
  }
}
