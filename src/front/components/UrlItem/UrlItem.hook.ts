import { useState, useEffect } from 'react';

type UrlState = 'isPending' | 'success' | 'error';

export const useHealthCheck = (url: string) => {
  const [urlState] = useState<UrlState>('isPending');

  useEffect(() => {});

  return urlState;
};
