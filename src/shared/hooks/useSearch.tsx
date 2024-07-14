import { useEffect, useState } from 'react';
import { LocalStorageService } from '../services/local-storage.service.';
const searchHistory = new LocalStorageService('searchHistory');

export function useSearch() {
  const [searchValue, setSearchValue] = useState<string>(() => {
    // Retrieve the search query from local storage
    return searchHistory.get() || '';
  });

  useEffect(() => {
    // Save the search query to local storage when the component unmounts
    return () => {
      searchHistory.set(searchValue);
    };
  });

  return { searchValue, setSearchValue };
}
