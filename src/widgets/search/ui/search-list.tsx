import { FC } from 'react';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import SearchItem from './search-item';

interface SearchResultsProps {
  data: iPerson[];
}

const SearchResults: FC<SearchResultsProps> = ({ data: peoples }) => {
  return (
    <section
      data-testid="search-results"
      className={
        ' flex flex-col gap-2 duration-150 w-full p-2 h-full overflow-y-scroll'
      }
    >
      {peoples
        ? peoples.map(peoples => (
            <SearchItem data={peoples} key={peoples.name} />
          ))
        : null}
    </section>
  );
};

export default SearchResults;
