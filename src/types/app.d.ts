import { Message } from 'node-telegram-bot-api';

export type MakeRequest = (url: string) => Promise<any>;

export type OnMessgeCallbackType = (msgId: string | number) => void;

export interface IBot {
  sendOk(url: string, chatId?: string | number): Promise<any>;
  sendAlert(url: string, chatId?: string | number): Promise<any>;
  onMessage(cb: OnMessgeCallbackType): void;
}

export type CheckUrlType = (
  url: string,
  onError: Function,
  onSuccess?: Function
) => Promise<any>;
