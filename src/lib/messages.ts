import { IBot } from 'app';

const composeAlert = (url: string) => `❗️${url} is down`;
const composeOk = (url: string) => `✅${url} is up`;

export default (bot: IBot, chatId: string) => ({
  sendAlert: (url: string) => bot.sendMessage(chatId, composeAlert(url)),
  sendOk: (url: string) => bot.sendMessage(chatId, composeOk(url))
});
