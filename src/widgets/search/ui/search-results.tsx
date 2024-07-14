import { FC } from 'react';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import Loader from '../../../shared/ui/icons/loader';
import SearchItem from './search-item';

interface SearchResultsProps {
  loader: boolean;
  data: iPerson[];
  error: boolean;
}

const SearchResults: FC<SearchResultsProps> = ({
  loader,
  data: peoples,
  error
}) => {
  if (error) throw new Error('Error');
  if (loader) return <Loader />;

  return (
    <section
      className={
        (!loader ? 'opacity-100' : 'opacity-0') +
        ' no-scrollbar flex flex-col gap-2 duration-150 w-full h-screen overflow-y-scroll'
      }
    >
      {peoples
        ? peoples.map((peoples, index) => (
            <SearchItem data={peoples} key={index} />
          ))
        : null}
    </section>
  );
};

export default SearchResults;
