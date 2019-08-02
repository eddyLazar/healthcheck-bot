import dotenv from 'dotenv';

dotenv.config();

class ConfigError extends Error {}

if (!process.env.URLS) {
  throw new ConfigError('no URLS provided');
}

if (!process.env.BOT_TOKEN) {
  throw new ConfigError('no BOT_TOKEN provided');
}

if (!process.env.TELEGRAM_CHANNEL) {
  throw new ConfigError('no TELEGRAM_CHANNEL provided');
}

export default {
  port: process.env.PORT || 3000,
  botToken: process.env.BOT_TOKEN,
  telegramChannel: process.env.TELEGRAM_CHANNEL,
  timeout: parseInt(process.env.TIMEOUT || '10000'),
  urls: process.env.URLS.split(',')
};
