import { Message } from 'node-telegram-bot-api';

type SendMessageType = (
  chatId: number | string,
  text: string
) => Promise<Message>;
