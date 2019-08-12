import confSchema from './config-schema';
import Joi from '@hapi/joi';

const validConfig = {
  PORT: '3000',
  BOT_TOKEN: 'valid token',
  TELEGRAM_CHANNEL: 'id of the channel or message',
  TIMEOUT: '10000',
  URLS: 'https://google.com,https://microsoft.com,http://0.0.0.0:8000'
};

test('given valid config should pass', () => {
  const { error } = Joi.validate(validConfig, confSchema);
  expect(error).toBe(null);
});

test('given invalid `TELEGRAM_CHANNEL` should fail', () => {
  const testObject = {
    ...validConfig,
    TELEGRAM_CHANNEL: null
  };

  expect(() => Joi.assert(testObject, confSchema)).toThrowError();
});

describe('given invalid `URLS` should throw error', () => {
  test('when `URLS` is null', () => {
    const testObject = {
      ...validConfig,
      URLS: null
    };

    expect(() => Joi.assert(testObject, confSchema)).toThrowError();
  });
});

test('given invalid `BOT_TOKEN` should fail', () => {
  const testObject = {
    ...validConfig,
    BOT_TOKEN: null
  };

  expect(() => Joi.assert(testObject, confSchema)).toThrowError();
});

test('given invalid `PORT` should fail', () => {
  const testObject = {
    ...validConfig,
    PORT: null
  };

  expect(() => Joi.assert(testObject, confSchema)).toThrowError();
});

test('given invalid `TIMEOUT` should fail', () => {
  const testObject = {
    ...validConfig,
    TIMEOUT: null
  };

  expect(() => Joi.assert(testObject, confSchema)).toThrowError();
});
