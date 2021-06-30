import * as dotenv from 'dotenv';
dotenv.config();

import { app } from './app';

const port = process.env.PORT || '8000';
console.log(`Escuchando en ${port}`);

app.listen(port);
