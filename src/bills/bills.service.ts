import {
  BadRequestException,
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Bill } from '@prisma/client';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { pdfTextToBill } from '../helpers/text-to-bill';
import { pdfScrapper } from '../helpers/pdf-reader';

@Injectable()
export class BillsService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(file: Express.Multer.File) {
    try {
      if (!file || !file.mimetype.includes('pdf')) {
        throw new BadRequestException('Correct file not providedd.');
      }

      const createBillDto: CreateBillDto = pdfTextToBill(
        await pdfScrapper(file),
      );

      const newBill = await this.prisma.bill.create({ data: createBillDto });

      return newBill;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }

  async findAll(
    page: number,
    limit: number,
    clientNumber?: string,
    month?: string,
  ) {
    try {
      const cachekey = `find-all-bills:${page}:${limit}:${clientNumber || ''}${
        month || ''
      }`;

      const cacheList = (await this.cacheManager.get(cachekey)) as Bill[];

      if (cacheList) {
        return cacheList;
      }

      const whereConditions: any = {};

      if (clientNumber) {
        whereConditions.clientNumber = clientNumber;
      }

      if (month) {
        whereConditions.month = month;
      }

      const bills = await this.prisma.bill.findMany({
        where: whereConditions,
        skip: (page - 1) * limit,
        take: limit,
      });

      await this.cacheManager.set(cachekey, {
        currentPage: +page,
        pageSize: +limit,
        quantity: bills.length,
        data: bills,
      });

      return {
        currentPage: +page,
        pageSize: +limit,
        quantity: bills.length,
        data: bills,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }

  async findOne(id: number) {
    try {
      const bill = await this.prisma.bill.findUnique({ where: { id } });

      if (!bill) {
        throw new NotFoundException(`A bill with id: ${id} not found.`);
      }

      return bill;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }
}
