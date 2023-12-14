'use strict';
import cors from 'cors';
import 'dotenv/config';

import express, { Express } from 'express';
import { connectToMongoDB } from './config/mongo';
import { options } from './cors.config';
import bookRoutes from './routes/bookRoutes';

const app: Express = express();
const PORT = process.env.PORT;

// Database
connectToMongoDB();

app.use(cors(options));
app.use(express.json());
// Api Endpoints
app.use('/books', bookRoutes);

app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});

export default app;
