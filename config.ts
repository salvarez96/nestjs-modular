import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

const processEnv = (env: string) => process.env[env];

export default registerAs('config', () => {
  return {
    database: {
      NAME: processEnv('DATABASE_NAME'),
      PORT: processEnv('DATABASE_PORT'),
    },
    API_KEY: processEnv('API_KEY'),
  };
});

export const validationSchema = {
  API_KEY: Joi.number().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  PORT: Joi.number().required(),
};
