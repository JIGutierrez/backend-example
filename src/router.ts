import * as Router from 'koa-router';

export const router = new Router();

import { routes } from './routes';

for (const [path, route] of Object.entries(routes)) {
  router.use(path, route.routes()).use(route.allowedMethods());
}
