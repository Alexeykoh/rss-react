import { FC } from 'react';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import Loader from '../../../shared/ui/icons/loader';
import SearchItem from './search-item';

interface SearchResultsProps {
  data: iPerson[];
}

const SearchResults: FC<SearchResultsProps> = ({ data: peoples }) => {
  <Loader />;

  return (
    <section
      className={
        ' no-scrollbar flex flex-col gap-2 duration-150 w-full h-screen overflow-y-scroll'
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
