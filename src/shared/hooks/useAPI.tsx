import { useEffect, useState } from 'react';

interface useAPI<T> {
  result: T | null;
  loading: boolean;
  error: boolean;
}

export function useAPI<T>(apiPromise: () => Promise<T>) {
  const [state, setState] = useState<useAPI<T>>({
    result: null,
    loading: false,
    error: false
  });

  function getData() {
    apiPromise()
      .then(data => {
        setState(prev => {
          return { ...prev, result: data, loading: false, error: false };
        });
      })
      .catch(() => {
        setState(prev => {
          return { ...prev, loading: false, error: true };
        });
      })
      .finally(() => {
        setState(prev => {
          return { ...prev, loading: false };
        });
      });
  }

  useEffect(() => {
    setState(prev => {
      return { ...prev, loading: true };
    });
    getData();
  }, []);

  return { state, refetch: getData };
}
