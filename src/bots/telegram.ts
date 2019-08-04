import TelegramBot from 'node-telegram-bot-api';
import { OnMessgeCallbackType } from 'app';
import { composeAlert, composeOk } from './messages';

export default class extends TelegramBot {
  channelId: string | number;

  constructor(
    channelId: string | number,
    token: string,
    options: TelegramBot.ConstructorOptions = {}
  ) {
    super(token, options);
    this.channelId = channelId;
  }

  sendAlert(url: string, chatId = this.channelId) {
    return this.sendMessage(chatId, composeAlert(url));
  }

  sendOk(url: string, chatId = this.channelId) {
    return this.sendMessage(chatId, composeOk(url));
  }

  onMessage(cb: OnMessgeCallbackType) {
    this.onText(/\/check/, msg => cb(msg.chat.id));

    this.on('channel_post', msg => {
      if (msg.text === '/check') {
        cb(msg.chat.id);
      }
    });
  }
}
