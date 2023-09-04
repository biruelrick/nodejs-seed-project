import './db.js';
import './utils/cron.js';
import express from 'express';
import bodyParser from 'body-parser';
import logger from './utils/logger.js';
import apiRoutesV1 from './routes/apiRoutesV1.js';
import webhookRoutesV1 from './routes/webhookRoutesV1.js';
import cors from 'cors';
import env from './config.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

const { APP_NAME, PORT } = env;
const app = express();

// -------------------------------------------------------------------------- //
// cors configuration
// -------------------------------------------------------------------------- //
const corsOptions = {
  origin: [
    'http://localhost',
    'https://api.jarvisly.com',
    'https://asaas.jarvisly.com',
  ],
  methods: 'GET,PUT,POST,DELETE',
  credentials: true,
};
app.use(cors(corsOptions)); // Aplicar as opções CORS

// -------------------------------------------------------------------------- //
// enable body in request
// -------------------------------------------------------------------------- //
app.use(bodyParser.json());

// -------------------------------------------------------------------------- //
// api routes: version 1
// -------------------------------------------------------------------------- //
app.use('/api/v1', apiRoutesV1);

// -------------------------------------------------------------------------- //
// webhooks routes: version 1
// -------------------------------------------------------------------------- //
app.use('/webhook/v1', webhookRoutesV1);

// -------------------------------------------------------------------------- //
// error middleware
// -------------------------------------------------------------------------- //
app.use(errorMiddleware);

// -------------------------------------------------------------------------- //
// api server bootstrap
// -------------------------------------------------------------------------- //
app.listen(PORT || 8010, () => {
  logger.debug(
    `👍 Asaas Integration Services for '${APP_NAME}' application running at 👉 http://localhost:${PORT} 🚀 `,
  );
});
