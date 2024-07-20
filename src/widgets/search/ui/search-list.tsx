import { FC } from 'react';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import SearchItem from './search-item';

interface SearchResultsProps {
  data: iPerson[];
}

const SearchList: FC<SearchResultsProps> = ({ data: peoples }) => {
  return (
    <section
      className={
        ' no-scrollbar flex flex-col gap-2 duration-150 w-full h-screen overflow-y-scroll'
      }
    >
      {peoples.length ? (
        peoples.map(peoples => <SearchItem data={peoples} key={peoples.name} />)
      ) : (
        <p>not result</p>
      )}
    </section>
  );
};

export default SearchList;
