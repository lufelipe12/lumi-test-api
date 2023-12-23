import { Module } from '@nestjs/common';

import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { PrismaModule } from '@infra/database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BillsController],
  providers: [BillsService],
})
export class BillsModule {}
