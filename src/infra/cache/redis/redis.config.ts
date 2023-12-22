import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';

export const redisConfigOptions: CacheModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],

  useFactory: (configService: ConfigService) => ({
    isGlobal: true,
    store: redisStore,
    host: configService.get('REDIS_HOST'),
    port: configService.get('REDIS_PORT'),
  }),
};
