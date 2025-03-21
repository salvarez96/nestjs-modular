import { registerAs } from '@nestjs/config';

const processEnv = (env: string) => process.env[env];

export default registerAs('config', () => {
  return {
    database: {
      name: processEnv('DATABASE_NAME'),
      port: processEnv('DATABASE_PORT'),
    },
    apiKey: processEnv('API_KEY'),
  };
});
