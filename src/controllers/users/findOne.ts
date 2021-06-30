import { User } from '../../db';

export const findOne = (id: string) => {
  return User.findOne(id);
};
