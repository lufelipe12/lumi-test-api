import { PrismaService } from '../infra/database/prisma/prisma.service';
import { billMock } from './bill.mock';
import { billsPaginatedMock } from './bills-paginated.mock';

export const prismaServiceMock = {
  provide: PrismaService,
  useValue: {
    bill: {
      create: jest.fn().mockResolvedValue(billMock),
      findMany: jest.fn().mockResolvedValue(billsPaginatedMock.data),
      findUnique: jest.fn().mockResolvedValue(billMock),
    },
  },
};
