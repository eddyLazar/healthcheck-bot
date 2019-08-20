import { useState, useEffect } from 'react';
import Api from '../../api';

export const useResources = () => {
  const [resources, setResources] = useState<string[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchResources = async () => {
    const resources = await Api.getResources();
    setIsFetching(false);
    setResources(resources);
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return { resources, isFetching };
};
