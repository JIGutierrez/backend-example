import * as Koa from 'koa';
import * as body from 'koa-body';
import * as logger from 'koa-logger';

export const app = new Koa();

app.use(logger()).use(body());

import { router } from './router';

app.use(router.routes()).use(router.allowedMethods());
