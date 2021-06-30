import { User } from '../../db';
import { ICreateUser } from '../../interfaces/user';

export const create = (data: ICreateUser) => {
  return User.create(data);
};
