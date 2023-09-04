import winston from 'winston';

// -------------------------------------------------------------------------- //
// colors
// -------------------------------------------------------------------------- //
const logLevels = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  debug: 'blue',
};

// -------------------------------------------------------------------------- //
// format
// -------------------------------------------------------------------------- //
const logFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `[${timestamp}] ${level}: ${message}`;
  }),
);

// -------------------------------------------------------------------------- //
// logger
// -------------------------------------------------------------------------- //
const logger = winston.createLogger({
  levels: logLevels,
  format: logFormat,
  transports: [new winston.transports.Console()],
});

// -------------------------------------------------------------------------- //
// exports
// -------------------------------------------------------------------------- //
export default logger;
