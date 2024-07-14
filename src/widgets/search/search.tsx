import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSearch } from '../../shared/hooks/useSearch';
import { iPerson } from '../../shared/interfaces/start-wars.interface';
import { StartWarsService } from '../../shared/services/start-wars.service';
import SearchForm from './ui/search-bar';
import SearchResults from './ui/search-results';

export function Search() {
  const [searchParams] = useSearchParams();
  const { searchValue, setSearchValue } = useSearch();
  const [state, setState] = useState({
    value: '',
    error: false,
    peoples: [] as iPerson[],
    loader: false,
    page: 1
  });

  useEffect(() => {
    setState(prev => {
      return { ...prev, value: searchValue };
    });
  }, []);

  useEffect(() => {
    setLoader(true);
    getPage()
      .then(data => {
        const pageNumber = Number(searchParams.get('page'));
        setState(prev => {
          return { ...prev, peoples: data.results, page: pageNumber };
        });
      })
      .finally(() => setLoader(false));
  }, [searchParams.get('page')]);

  function getPage() {
    return StartWarsService.getPage(Number(searchParams.get('page')) || 1);
  }

  function setLoader(loader: boolean) {
    setState(prev => {
      return { ...prev, loader: loader };
    });
  }

  function handleSubmit() {
    setLoader(true);
    setSearchValue(state.value);
    StartWarsService.search(searchValue)
      .then(data => {
        setLoader(false);
        setState(prev => {
          return { ...prev, peoples: data.results };
        });
      })
      .finally(() => {
        setLoader(false);
      });
  }
  function clearInput() {
    setSearchValue('');
    setState(prev => {
      return { ...prev, value: '' };
    });
  }
  function handleInput(value: string) {
    setState(prev => {
      return { ...prev, value: value };
    });
  }

  return (
    <section className="md:w-96 w-64 h-full flex flex-col gap-2">
      <SearchForm
        value={state.value}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        clearInput={clearInput}
      />
      <button
        onClick={() => {
          setState(prev => {
            return { ...prev, error: true };
          });
        }}
      >
        catch error
      </button>
      <div className="w-full flex justify-between">
        <Link
          to={`/?page=${Number(searchParams.get('page')) - 1}`}
          className="px-4 py-2 cursor-pointer"
        >
          prev
        </Link>
        <Link
          to={`/?page=${Number(searchParams.get('page')) + 1}`}
          className="px-4 py-2 cursor-pointer"
        >
          next
        </Link>
      </div>
      <p>page: {state.page}</p>
      <SearchResults
        loader={state.loader}
        data={state?.peoples || []}
        error={state.error}
      />
    </section>
  );
}
