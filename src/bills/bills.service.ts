import {
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

@Injectable()
export class BillsService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(createBillDto: CreateBillDto) {
    try {
      const newBill = await this.prisma.bill.create({ data: createBillDto });

      return newBill;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }

  async findAll(): Promise<Bill[]> {
    try {
      const cacheList = (await this.cacheManager.get(
        'find-all-bills',
      )) as Bill[];

      if (cacheList) {
        return cacheList;
      }

      const bills = await this.prisma.bill.findMany();
      await this.cacheManager.set('find-all-bills', bills);

      return bills;
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
