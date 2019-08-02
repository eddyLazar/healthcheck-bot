import { SendMessageType } from 'app';

class HealthCheckBot {
  channelId: string;

  sendMessage: SendMessageType;

  constructor(sendMessage: SendMessageType, channelId: string) {
    this.sendMessage = sendMessage;
    this.channelId = channelId;
  }

  sendAlert(url: string) {
    this.sendMessage(this.channelId, `❗️${url} is down`);
  }

  sendOk(url: string) {
    this.sendMessage(this.channelId, `✅${url} is up`);
  }
}

export default HealthCheckBot;
