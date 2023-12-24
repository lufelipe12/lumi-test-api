import { PrismaService } from '../infra/database/prisma/prisma.service';

export const prismaServiceMock = {
  provide: PrismaService,
  useValue: {
    bill: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
    },
  },
};
