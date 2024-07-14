import { useEffect, useState } from 'react';
import { LocalStorageService } from '../services/local-storage.service.';
const searchHistory = new LocalStorageService('searchHistory');

export function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue || '');
  useEffect(() => {
    setValue(searchHistory.get() || '');

    return () => {
      searchHistory.set(value);
    };
  }, []);

  const set = (value: string) => {
    searchHistory.set(value);
    setValue(value);
  };

  return [value, set] as [string, (value: string) => void];
}
