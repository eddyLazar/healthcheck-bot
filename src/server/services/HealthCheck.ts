import { IBot, ChatDestination } from 'app';

interface CheckConfig {
  alert: boolean;
  success: boolean;
}

export default class {
  urls: string[];

  bot: IBot;

  checkUrl: (url: string) => Promise<any>;

  constructor(
    bot: IBot,
    urls: string[],
    checkUrl: (url: string) => Promise<any>
  ) {
    this.urls = urls;
    this.checkUrl = checkUrl;
    this.bot = bot;
  }

  checkAll(
    detination: ChatDestination,
    conf: CheckConfig = { alert: true, success: false }
  ) {
    return this.urls.map(url => {
      const promise = this.checkUrl(url);

      if (conf.success) {
        promise.then(() => this.bot.sendOk(url, detination));
      }
      if (conf.alert) {
        promise.catch(() => this.bot.sendAlert(url, detination));
      }

      return promise;
    });
  }
}
