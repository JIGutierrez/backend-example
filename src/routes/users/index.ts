import * as Router from 'koa-router';

export const userRouter = new Router();

import { get } from './get';

userRouter.get('/:id', get);
