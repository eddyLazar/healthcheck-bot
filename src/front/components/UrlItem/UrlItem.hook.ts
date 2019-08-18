import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';

export enum HealthState {
  isPending = 'isPending',
  success = 'success',
  error = 'error'
}

export const useHealthCheck = (url: string) => {
  const [healthState, setState] = useState<HealthState>(HealthState.isPending);

  const checkUrl = useCallback(() => {
    setState(HealthState.isPending);
    Axios.get(`/health-check?url=${url}`)
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
