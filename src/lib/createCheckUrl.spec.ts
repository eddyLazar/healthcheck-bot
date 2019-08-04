import createCheckUrl from './createCheckUrl';

test('should call error handler', async () => {
  const checkUrl = createCheckUrl(jest.fn().mockRejectedValue(false));
  const onError = jest.fn();
  await checkUrl('url', onError);
  expect(onError).toHaveBeenCalled();
});

test('should call success handler', async () => {
  const checkUrl = createCheckUrl(jest.fn().mockResolvedValue(false));
  const onError = jest.fn();
  const onSuccess = jest.fn();
  await checkUrl('url', onError, onSuccess);
  expect(onSuccess).toHaveBeenCalled();
});
