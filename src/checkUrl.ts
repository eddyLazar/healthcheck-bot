type MakeRequest = (url: string) => Promise<void>;

export default async (
  url: string,
  request: MakeRequest,
  onError: Function
): Promise<boolean> => {
  try {
    await request(url);
    return true;
  } catch (error) {
    onError();
    return false;
  }
};
