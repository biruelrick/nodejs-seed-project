const { env } = process;

// -------------------------------------------------------------------------- //
// initConfig
// -------------------------------------------------------------------------- //
export const initConfig = () => {
  const app = env.APPLICATION_CODE.toUpperCase();

  process.env.APP = process.env[`${app}_APP`];
  process.env.APP_NAME = process.env[`${app}_APP_NAME`];
  process.env.MONGO_URI = process.env[`${app}_MONGO_URI`];
};

// -------------------------------------------------------------------------- //
// exports
// -------------------------------------------------------------------------- //
export default env;
