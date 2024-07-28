import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSearch } from '../../shared/hooks/useSearch';

import { useEffect } from 'react';
import {
  useGetCharactersByPageQuery,
  useSearchMutation
} from '../../shared/services/star-wars.service';

import { PaginationBar } from '../../features/pagination/pagination-bar';
import { LoaderWrapper } from '../../shared/ui/loader-wrapper/loader-wrapper';
import { ThemeSwitcher } from '../theme/theme-switcer';
import SearchForm from './ui/search-bar';
import SearchList from './ui/search-list';

export function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
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
    <section data-testid="search" className="w-full h-full flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2 p-2">
        <ThemeSwitcher />
        <SearchForm
          value={searchValue}
          handleInput={setSearchValue}
          handleSubmit={handleSubmit}
          clearInput={clearInput}
        />
      </div>

      <PaginationBar
        isLoading={isFetching}
        onNext={() => {
          navigate(`/?page=${Number(searchParams.get('page')) + 1}`);
        }}
        onPrev={() => {
          navigate(`/?page=${Number(searchParams.get('page')) - 1}`);
        }}
        currentPage={Number(searchParams.get('page'))}
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
          <SearchList data={data?.results || []} />
        </LoaderWrapper>
      )}
    </section>
  );
}
