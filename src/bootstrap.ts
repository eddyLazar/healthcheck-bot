import TelegramBot from './bots/telegram';
import config from './config';
import makeRequest from './lib/makeRequest';
import express from 'express';
import HealthCheck from './services/HealthCheck';
import createCheckUrl from './lib/createCheckUrl';

const bootstrap = () => {
  const telegramBot = new TelegramBot(config.telegramChannel, config.botToken, {
    polling: true
  });

  const checkUrl = createCheckUrl(makeRequest);

  const healthCheckService = new HealthCheck(config.urls, checkUrl);

  healthCheckService.initReplies(telegramBot);

  const job = () => {
    healthCheckService.checkAll(telegramBot);
  };

  const app = express();

  return { app, job };
};

export default bootstrap;
