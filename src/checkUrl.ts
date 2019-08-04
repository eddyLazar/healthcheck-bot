type MakeRequest = (url: string) => Promise<void>;

export default async (
  urls: string[],
  makeRequest: MakeRequest,
  onError: Function
): Promise<void> => {
  for (const url of urls) {
    makeRequest(url).catch(() => onError(url));
  }
};
