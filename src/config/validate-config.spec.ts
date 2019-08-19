import validateConfig from './validate-config';

const validConfig = {
  PORT: '3000',
  BOT_TOKEN: 'valid token',
  TELEGRAM_CHANNEL: 'id of the channel or message',
  TIMEOUT: '10000',
  URLS: 'https://google.com,https://microsoft.com,http://0.0.0.0:8000'
};

test('given valid config should pass', () => {
  expect(() => validateConfig(validConfig)).not.toThrowError();
});

test('given invalid `TELEGRAM_CHANNEL` should fail', () => {
  const testObject = {
    ...validConfig,
    TELEGRAM_CHANNEL: null
  };

  expect(() => validateConfig(testObject)).toThrowError();
});

describe('given invalid `URLS` should throw error', () => {
  test('when `URLS` is null', () => {
    const testObject = {
      ...validConfig,
      URLS: null
    };

    expect(() => validateConfig(testObject)).toThrowError();
  });
});

test('given invalid `BOT_TOKEN` should fail', () => {
  const testObject = {
    ...validConfig,
    BOT_TOKEN: null
  };

  expect(() => validateConfig(testObject)).toThrowError();
});

test('given invalid `PORT` should fail', () => {
  const testObject = {
    ...validConfig,
    PORT: null
  };

  expect(() => validateConfig(testObject)).toThrowError();
});

test('given empty `PORT` should NOT fail', () => {
  const testObject = {
    ...validConfig,
    PORT: ''
  };

  expect(() => validateConfig(testObject)).not.toThrowError();
});

test('given invalid `TIMEOUT` should fail', () => {
  const testObject = {
    ...validConfig,
    TIMEOUT: null
  };

  expect(() => validateConfig(testObject)).toThrowError();
});

test('given empty `TIMEOUT` should NOT fail', () => {
  const testObject = {
    ...validConfig,
    TIMEOUT: ''
  };

  expect(() => validateConfig(testObject)).not.toThrowError();
});
