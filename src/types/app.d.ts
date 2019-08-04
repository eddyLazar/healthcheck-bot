import { Message } from 'node-telegram-bot-api';

export interface IBot {
  sendMessage(chatId: number | string, text: string): Promise<any>;
}
