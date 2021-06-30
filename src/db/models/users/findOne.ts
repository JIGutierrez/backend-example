import db from '../../index';
export const findOne = async (id: string) => {
  const user = await db.user.findUnique({ where: { id } });
  if (!user) {
    throw new Error();
  }
  return user;
};
