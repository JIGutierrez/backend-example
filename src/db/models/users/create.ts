import db from '../..';
import { Prisma } from '@prisma/client';

export const create = async (data: Prisma.UserCreateInput) => {
  return await db.user.create({ data });
};
