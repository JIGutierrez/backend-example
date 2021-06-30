import { RouterContext } from 'koa-router';
import { UserController } from '../../controllers';
import { ICreateUser } from '../../interfaces/user';

export const create = async (ctx: RouterContext) => {
  const data: Partial<ICreateUser> | undefined = ctx.request.body;

  if (!data || !data.name || !data.password) {
    throw new Error();
  }

  data as ICreateUser;

  const user = await UserController.create({
    name: data.name,
    password: data.password,
  });

  ctx.body = { user };
  ctx.status = 201;
};
