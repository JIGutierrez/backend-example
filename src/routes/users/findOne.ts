import { RouterContext } from 'koa-router';
import { UserController } from '../../controllers';

export const findOne = async (ctx: RouterContext) => {
  const id = ctx.params.id;

  const user = await UserController.findOne(id);

  ctx.body = { user };
  ctx.status = 200;
};
