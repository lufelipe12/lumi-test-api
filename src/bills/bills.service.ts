import { HttpException, Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from '@prisma/client';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}

  create(createBillDto: CreateBillDto) {
    return 'This action adds a new bill';
  }

  async findAll(): Promise<Bill[]> {
    try {
      return await this.prisma.bill.findMany();
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

  update(id: number, updateBillDto: UpdateBillDto) {
    return `This action updates a #${id} bill`;
  }

  remove(id: number) {
    return `This action removes a #${id} bill`;
  }
}
