type MakeRequest = (url: string) => Promise<any>;

export default async (
  urls: string[],
  makeRequest: MakeRequest,
  onError: Function
): Promise<any[]> => {
  const promises = [];

  for (const url of urls) {
    promises.push(makeRequest(url).catch(() => onError(url)));
  }

  return Promise.all(promises);
};
