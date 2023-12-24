import { Test, TestingModule } from '@nestjs/testing';

import { BillsService } from './bills.service';
import { cacheManagerMock, prismaServiceMock } from '../testing';

describe('BillsService', () => {
  let service: BillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillsService, cacheManagerMock, prismaServiceMock],
    }).compile();

    service = module.get<BillsService>(BillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
