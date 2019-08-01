import checkUrl from './checkUrl';

describe('when url works', () => {
  const mockUrl = 'http://google.com';
  const onError = () => ({});
  const makeRequest = jest.fn();

  test('should call request arg with given url', async () => {
    await checkUrl(mockUrl, makeRequest, onError);
    expect(makeRequest).toHaveBeenCalledWith(mockUrl);
  });

  test('should resolve to true', async () => {
    const expected = true;
    const actual = await checkUrl(mockUrl, makeRequest, onError);
    expect(actual).toBe(expected);
  });
});

describe("when url doesn't work", () => {
  const mockUrl = 'http://google.com';
  const onError = jest.fn();
  const makeRequest = jest.fn().mockRejectedValue(0);

  test('should call error handler', async () => {
    await checkUrl(mockUrl, makeRequest, onError);
    expect(onError).toHaveBeenCalled();
  });
});
