import TelegramBot from 'node-telegram-bot-api';
import createMessages from './lib/messages';
import checkUrls from './lib/checkUrls';
import config from './config';
import Axios from 'axios';
import express from 'express';

const bootstrap = () => {
  const telegramBot = new TelegramBot(config.botToken, {
    polling: true
  });

  const { sendAlert } = createMessages(telegramBot, config.telegramChannel);

  const job = () => checkUrls(config.urls, Axios.get, sendAlert);

  const app = express();

  return { app, job };
};

export default bootstrap;
