import TelegramBot from './bots/telegram';
import config from '../config';
import express from 'express';
import HealthCheck from './services/HealthCheck';
import makeRequest from './lib/makeRequest';
import healthCheckRoute from './routes/health-check';
import webAppRoutes from './routes/web-app';
import resourceRoutes from './routes/resources';

const bootstrap = () => {
  const telegramBot = new TelegramBot(config.botToken, {
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

  webAppRoutes(app);

  healthCheckRoute(app, makeRequest);

  resourceRoutes(app, config.urls);

  return { app, job };
};

export default bootstrap;
