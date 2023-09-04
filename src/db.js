import dotenv from 'dotenv';

dotenv.config();

import { initConfig } from './config.js';

initConfig();

import mongoose from 'mongoose';
import logger from './utils/logger.js';
import dayjs from 'dayjs'; // Importe o logger
import env from './config.js';

const { MONGO_URI } = env;

// -------------------------------------------------------------------------- //
// log builder
// -------------------------------------------------------------------------- //
const dbInitTime = dayjs().unix();
let dbDetails = 'Connection string no available!';

if (MONGO_URI) {
  let host, database, user, passwordPlacehold;

  if (MONGO_URI.includes('mongodb://localhost')) {
    host = 'localhost';

    const idxDbName = MONGO_URI.lastIndexOf('/');
    database = MONGO_URI.substring(idxDbName + 1);

    user = 'empty';

    passwordPlacehold = 'empty';
  } else {
    let start = MONGO_URI.indexOf('//') + 2;
    let end = MONGO_URI.indexOf(':', start);

    user = MONGO_URI.substring(start, end);

    // get password
    start = ++end;
    end = MONGO_URI.indexOf('@', end);

    const password = MONGO_URI.substring(start, end);
    passwordPlacehold = '***'; // password ? '*'.repeat(password.length) : 'empty';

    // get host
    start = ++end;
    end = MONGO_URI.indexOf('/', end);
    host = MONGO_URI.substring(start, end);

    // get database name
    start = MONGO_URI.indexOf('/', end);
    end = MONGO_URI.indexOf('?', end);

    database = MONGO_URI.substring(++start, end);
  }

  // dbDetails = `mongodb+srv://${user}:${passwordPlacehold}@${database}`;
  dbDetails = `-h:${host} -db:${database} -u:${user} -p:${passwordPlacehold}`;

  mongoose.set('debug', process?.env?.MONGOOSE_DEBUG === 'true');
  mongoose.set('strictQuery', true);
}

// -------------------------------------------------------------------------- //
// db events
// -------------------------------------------------------------------------- //
const db = mongoose.connection;

// -------------------------------------------------------------------------- //
// open event
// -------------------------------------------------------------------------- //
db.once('open', () => {
  const dbFinishTime = dayjs().unix();
  const dbSpentTime = dbFinishTime - dbInitTime;
  logger.info(
    `👍 MongoDB Connected Successfully! 🚀 -> ${dbDetails} in ${dbSpentTime} seconds...`,
  );
});

// -------------------------------------------------------------------------- //
// error event
// -------------------------------------------------------------------------- //
db.on('error', (err) => {
  const dbFinishTime = dayjs().unix();
  const dbSpentTime = dbFinishTime - dbInitTime;
  logger.error(
    `👎 MongoDB Connection error ${err} ❌`,
    `${dbDetails} takes ${dbSpentTime} seconds...`,
  );
});

// -------------------------------------------------------------------------- //
// disconnected connection event
// -------------------------------------------------------------------------- //
db.on('disconnected', () => {
  const dbFinishTime = dayjs().unix();
  const dbSpentTime = dbFinishTime - dbInitTime;
  logger.debug(
    '👋 MongoDB Disconnected! ✅',
    `${dbDetails} takes ${dbSpentTime} seconds...`,
  );
});

// -------------------------------------------------------------------------- //
// close connection event
// -------------------------------------------------------------------------- //
db.once('close', () => {
  const dbFinishTime = dayjs().unix();
  const dbSpentTime = dbFinishTime - dbInitTime;
  logger.debug(
    '👋 MongoDB Closed Successfully! ✅',
    `${dbDetails} takes ${dbSpentTime} seconds...`,
  );
});

// -------------------------------------------------------------------------- //
// mongo connection
// -------------------------------------------------------------------------- //
await mongoose.connect(MONGO_URI);

// -------------------------------------------------------------------------- //
// exports
// -------------------------------------------------------------------------- //
export default db;
