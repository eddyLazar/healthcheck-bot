import TelegramBot from './bots/telegram';
import config from './config';
import express from 'express';
import HealthCheck from './services/HealthCheck';
import makeRequest from './lib/makeRequest';

const bootstrap = () => {
  const telegramBot = new TelegramBot(config.telegramChannel, config.botToken, {
    polling: true
  });

  const healthCheckService = new HealthCheck(
    telegramBot,
    config.urls,
    makeRequest
  );

  const job = () => {
    healthCheckService.checkAll(config.telegramChannel);
  };

  telegramBot.onCheckCommand(msgId =>
    healthCheckService.checkAll(msgId, {
      success: true,
      alert: true
    })
  );

  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello world\n');
  });

  return { app, job };
};

export default bootstrap;
