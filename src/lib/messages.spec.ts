import createMessages from './messages';

describe('given bot and channel', () => {
  const channelId = 'channelId';
  const url = 'google.com';
  const bot = {
    sendMessage: jest.fn(),
    sendOk: jest.fn()
  };
  const { sendAlert, sendOk } = createMessages(bot, channelId);

  test('should send Alert message', () => {
    sendAlert(url);
    expect(bot.sendMessage).toHaveBeenCalledWith(
      channelId,
      `❗️${url} is down`
    );
  });

  test('should send OK message', () => {
    sendOk(url);
    expect(bot.sendMessage).toHaveBeenCalledWith(channelId, `✅${url} is up`);
  });
});
