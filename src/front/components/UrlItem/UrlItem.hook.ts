import { useState, useEffect, useCallback } from 'react';
import Api from '../../api';

export enum HealthState {
  isPending = 'isPending',
  success = 'success',
  error = 'error'
}

export const useHealthCheck = (url: string): [HealthState, () => void] => {
  const [healthState, setState] = useState<HealthState>(HealthState.isPending);

  const checkUrl = useCallback(() => {
    setState(HealthState.isPending);
    Api.checkUrl(url)
      .then(() => setState(HealthState.success))
      .catch(() => setState(HealthState.error));
  }, []);

  useEffect(() => {
    checkUrl();
    const interval = setInterval(checkUrl, 10000);
    return () => clearInterval(interval);
  }, []);

  return [healthState, checkUrl];
};
