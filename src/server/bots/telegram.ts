import TelegramBot from 'node-telegram-bot-api';
import { CommandCallbackType, ChatDestination } from 'app';
import { composeAlert, composeOk } from './messages';

export default class extends TelegramBot {
  sendAlert(url: string, chatId: ChatDestination) {
    return this.sendMessage(chatId, composeAlert(url));
  }

  sendOk(url: string, chatId: ChatDestination) {
    return this.sendMessage(chatId, composeOk(url));
  }

  onCheckCommand(cb: CommandCallbackType) {
    this.onText(/\/check/, msg => cb(msg.chat.id));

    this.on('channel_post', msg => {
      if (msg.text === '/check') {
        cb(msg.chat.id);
      }
    });
  }
}
