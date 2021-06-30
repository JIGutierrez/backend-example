import * as Router from 'koa-router';

export const userRouter = new Router();

import { findOne } from './findOne';
import { create } from './create';

userRouter.get('/:id', findOne);
userRouter.post('/', create);
