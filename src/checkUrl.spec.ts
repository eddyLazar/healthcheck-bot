import checkUrl from './checkUrl';

describe('given two valid urls', () => {
  const mockUrls = ['http://google.com', 'http://google2.com'];
  const onError = () => ({});
  const makeRequest = jest.fn().mockResolvedValue(true);

  test('should make request with each url', async () => {
    await checkUrl(mockUrls, makeRequest, onError);
    expect(makeRequest).toHaveBeenCalledWith(mockUrls[0]);
    expect(makeRequest).toHaveBeenCalledWith(mockUrls[1]);
  });
});

describe("when url doesn't work", () => {
  const onError = jest.fn();
  const makeRequest = jest.fn().mockRejectedValue(0);
  const mockUrls = ['http://google.com', 'http://google2.com'];

  test('should call error handler', async () => {
    await checkUrl(mockUrls, makeRequest, onError);
    expect(onError).toHaveBeenCalledTimes(2);
  });
  test('should pass url to error handler', async () => {
    await checkUrl(mockUrls, makeRequest, onError);
    expect(onError).toHaveBeenCalledWith(mockUrls[0]);
  });
});
