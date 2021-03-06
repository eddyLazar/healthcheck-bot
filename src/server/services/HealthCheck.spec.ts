import HealthCheck from './HealthCheck';

const urls = ['http://google2.com', 'http://microsoft.com'];
const mockChatId = 'mychatId';

const botFactory = () => ({
  sendOk: jest.fn(),
  sendAlert: jest.fn(),
  onCheckCommand: jest.fn()
});

describe('checkAll()', () => {
  test('given urls should make requets to those urls', async () => {
    const checkUrlMock = jest.fn().mockResolvedValue(true);
    const bot = botFactory();
    const healthCheckService = new HealthCheck(bot, urls, checkUrlMock);

    await healthCheckService.checkAll(mockChatId);

    expect(checkUrlMock).toHaveBeenCalledWith(urls[0]);
    expect(checkUrlMock).toHaveBeenCalledWith(urls[1]);
  });

  describe('when url is broken', () => {
    const checkUrlMock = (url: string) =>
      url === urls[0] ? Promise.resolve() : Promise.reject(new Error());

    test('should send alert message to given destination', async () => {
      const bot = botFactory();
      const healthCheckService = new HealthCheck(bot, urls, checkUrlMock);

      await Promise.all(healthCheckService.checkAll(mockChatId));

      expect(bot.sendAlert).toHaveBeenCalledWith(urls[1], mockChatId);
    });

    test('given no options should NOT send succes message', async () => {
      const bot = botFactory();
      const healthCheckService = new HealthCheck(bot, urls, checkUrlMock);

      await Promise.all(healthCheckService.checkAll(mockChatId));

      expect(bot.sendOk).not.toHaveBeenCalled();
    });

    test('given config should send alert and success messages', async () => {
      const bot = botFactory();
      const healthCheckService = new HealthCheck(bot, urls, checkUrlMock);
      await Promise.all(
        healthCheckService.checkAll(mockChatId, {
          alert: true,
          success: true
        })
      );

      expect(bot.sendAlert).toHaveBeenCalledWith(urls[1], mockChatId);
      expect(bot.sendOk).toHaveBeenCalledWith(urls[0], mockChatId);
    });
  });
});
