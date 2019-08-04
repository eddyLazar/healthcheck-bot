import { MakeRequest } from 'app';

export default (makeRequest: MakeRequest) => (
  url: string,
  onError: Function,
  onSuccess?: Function
): Promise<any[]> => {
  let promise = makeRequest(url);

  if (onSuccess) {
    promise = promise.then(() => onSuccess());
  }

  promise = promise.catch(() => onError());

  return promise;
};
