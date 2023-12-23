import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from '@infra/database/prisma/prisma.module';
import { RedisModule } from '@infra/cache/redis/redis.module';
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    RedisModule,
    BillsModule,
  ],
})
export class AppModule {}
