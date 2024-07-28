import { useEffect, useState } from 'react';

export function useStorage<T>(key: string) {
  const [store, setStore] = useState<T | null>(null);
  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) {
      setStore(JSON.parse(data) as T);
    }

    return () => {
      localStorage.setItem(key, JSON.stringify(store));
    };
  }, []);
  return { store, setStore };
}
