import { useSearchParams } from 'react-router-dom';
import { useSearch } from '../../shared/hooks/useSearch';

import { useEffect } from 'react';
import {
  useGetCharactersByPageQuery,
  useSearchMutation
} from '../../shared/services/star-wars.service';
import { LoaderWrapper } from '../../shared/ui/loader-wrapper/loader-wrapper';

import SearchForm from './ui/search-bar';
import SearchList from './ui/search-list';
import { SearchNav } from './ui/search-nav';

export function Search() {
  const [searchParams] = useSearchParams();
  const { searchValue, setSearchValue } = useSearch();
  const [
    doSearch,
    { isLoading: searchIsFetching, error: searchError, data: searchData }
  ] = useSearchMutation();

  const { data, error, isFetching, refetch } = useGetCharactersByPageQuery(
    Number(searchParams.get('page')) || 1
  );

  function handleSubmit() {
    doSearch(searchValue);
    doSearch(searchValue);
  }
  function clearInput() {
    setSearchValue('');
    refetch();
  }

  useEffect(() => {
    doSearch(searchValue);
    return () => {
      doSearch('');
    };
  }, [searchValue]);

  return (
    <section className="md:w-96 w-64 h-full flex flex-col gap-2">
      <SearchForm
        value={searchValue}
        handleInput={setSearchValue}
        handleSubmit={handleSubmit}
        clearInput={clearInput}
      />
      <SearchNav
        isLoading={isFetching}
        nextPage={Number(searchParams.get('page')) + 1}
        prevPage={Number(searchParams.get('page')) - 1}
      />
      {searchValue && (
        <LoaderWrapper
          error={searchError ? true : false}
          isLoading={searchIsFetching}
        >
          <SearchList data={searchData?.results || []} />
        </LoaderWrapper>
      )}
      {!searchValue && (
        <LoaderWrapper error={error ? true : false} isLoading={isFetching}>
          <p>page: {Number(searchParams.get('page'))}</p>
          <SearchList data={data?.results || []} />
        </LoaderWrapper>
      )}
    </section>
  );
}
