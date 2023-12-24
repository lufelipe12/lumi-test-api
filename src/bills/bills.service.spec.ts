import { Test, TestingModule } from '@nestjs/testing';

import { BillsService } from './bills.service';
import {
  billMock,
  billsPaginatedMock,
  cacheManagerMock,
  prismaServiceMock,
} from '../testing';

describe('BillsService', () => {
  let billsService: BillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillsService, cacheManagerMock, prismaServiceMock],
    }).compile();

    billsService = module.get<BillsService>(BillsService);
  });

  it('should be defined', () => {
    expect(billsService).toBeDefined();
  });

  describe('Read', () => {
    it('Should find all bills paginated', async () => {
      const result = await billsService.findAll(1, 5);

      expect(result).toEqual(billsPaginatedMock);
    });

    it('Should return a bill by id', async () => {
      const result = await billsService.findOne(1);

      expect(result).toEqual(billMock);
    });
  });
});
