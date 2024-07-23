import { useEffect, useState } from 'react';

export function useSearch() {
  const [searchValue, setSearchValue] = useState<string>(() => {
    const searchQuery = localStorage.getItem('searchHistory');
    if (searchQuery) {
      return searchQuery;
    } else {
      return '';
    }
  });

  useEffect(() => {
    return () => {
      localStorage.setItem('searchHistory', searchValue);
    };
  });

  return { searchValue, setSearchValue };
}
