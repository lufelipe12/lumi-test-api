import { CACHE_MANAGER } from '@nestjs/cache-manager';

export const cacheManagerMock = {
  provide: CACHE_MANAGER,
  useValue: {
    get: jest.fn(),
    set: jest.fn(),
  },
};
