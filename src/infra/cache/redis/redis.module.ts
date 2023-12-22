import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

import { redisConfigOptions } from './redis.config';

@Module({
  imports: [CacheModule.registerAsync(redisConfigOptions)],
})
export class RedisModule {}
