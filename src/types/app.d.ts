import { Message } from 'node-telegram-bot-api';

type ChatDestination = string | number;

export type MakeRequest = (url: string) => Promise<any>;

export type CommandCallbackType = (msgId: ChatDestination) => void;

export interface IBot {
  sendOk(url: string, chatId: ChatDestination): Promise<any>;
  sendAlert(url: string, chatId: ChatDestination): Promise<any>;
  onCheckCommand(cb: CommandCallbackType): void;
}
