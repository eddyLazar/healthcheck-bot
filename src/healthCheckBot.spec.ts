import HealthCheckBot from './healthCheckBot';

test('should send alert messages', async () => {
  const sendMessage = jest.fn();
  const channelId = '@mychannel';

  // @ts-ignore
  const bot = new HealthCheckBot(sendMessage, channelId);

  await bot.sendAlert('http://google.com');

  const expectedMessage = '❗️http://google.com is down';

  expect(sendMessage).toHaveBeenCalledWith(channelId, expectedMessage);
});

test('should send ok messages', async () => {
  const sendMessage = jest.fn();
  const channelId = '@mychannel';

  // @ts-ignore
  const bot = new HealthCheckBot(sendMessage, channelId);

  await bot.sendOk('http://google.com');

  const expectedMessage = '✅http://google.com is up';

  expect(sendMessage).toHaveBeenCalledWith(channelId, expectedMessage);
});
