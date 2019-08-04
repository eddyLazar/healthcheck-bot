import { TelegramBotType } from 'app';

const composeAlert = (url: string) => `❗️${url} is down`;
const composeOk = (url: string) => `✅${url} is up`;

export default (bot: TelegramBotType, channelId: string) => ({
  sendAlert: (url: string) => bot.sendMessage(channelId, composeAlert(url)),
  sendOk: (url: string) => bot.sendMessage(channelId, composeOk(url))
});
