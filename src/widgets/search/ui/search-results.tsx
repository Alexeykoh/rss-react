import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/app.store';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import SearchItem from './search-item';

interface SearchResultsProps {
  data: iPerson[];
}

const SearchResults: FC<SearchResultsProps> = ({ data: peoples }) => {
  const viewedList = useSelector((state: RootState) => state.startWarsAPI);
  console.log(viewedList);
  const dispatch = useDispatch();
  return (
    <section
      className={
        ' no-scrollbar flex flex-col gap-2 duration-150 w-full h-screen overflow-y-scroll'
      }
    >
      <div>
        <button onClick={() => dispatch({ type: 'viewed/clearList' })}>
          clear all
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'viewed/selectAll', payload: peoples })
          }
        >
          select all
        </button>
      </div>
      {peoples
        ? peoples.map(peoples => (
            <SearchItem data={peoples} key={peoples.name} />
          ))
        : null}
    </section>
  );
};

export default SearchResults;
