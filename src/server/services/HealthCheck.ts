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
    return this.urls.map(url =>
      this.checkUrl(url)
        .then(() => conf.success && this.bot.sendOk(url, detination))
        .catch(() => {
          conf.alert && this.bot.sendAlert(url, detination);
        })
    );
  }
}
