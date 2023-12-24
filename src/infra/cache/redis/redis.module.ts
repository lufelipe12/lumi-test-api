import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

import { redisConfigOptions } from './redis.config';

@Module({
  imports: [
    CacheModule.registerAsync({ isGlobal: true, ...redisConfigOptions }),
  ],
})
export class RedisModule {}
