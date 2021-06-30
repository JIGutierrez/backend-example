import { RouterContext } from 'koa-router';
import db from '../../db';

export const get = async (ctx: RouterContext) => {
  const ideee = ctx.params.id;

  ctx.status = 200;
  const user = await db.user.findUnique({
    where: { id: ideee },
    include: { stories: true },
  });
  if (!user) {
    throw new Error();
  }
  ctx.response.body = { user };
  user.stories;

  const story = await db.story.findUnique({
    where: { id: 1 },
    include: {
      user: {
        include: {
          stories: true,
        },
      },
    },
  });

  if (story) {
    story.user.stories;
  }
};
