import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/app.store';
import {
  addToList,
  removeFromList
} from '../../../features/selectedItems/selectedItems.slice';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';

interface Props {
  data: iPerson;
}

const SearchItem: React.FC<Props> = ({ data }) => {
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.list
  );
  const dispatch = useDispatch();

  const dataID = data.url.split('/')[5];
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState<boolean>(
    selectedItems.find(item => item.url === data.url) ? true : false
  );

  function selectedHandler() {
    if (!selected) {
      setSelected(true);
      dispatch(addToList({ ...data, selected: true }));
    } else {
      setSelected(false);
      dispatch(removeFromList({ ...data, selected: false }));
    }
  }

  return (
    <li
      className={
        (Number(dataID) === Number(searchParams.get('details'))
          ? ' bg-sky-500 '
          : ' bg-slate-600 ') + ' flex flex-row p-2 gap-2 '
      }
    >
      <Link
        to={`/details/?details=${dataID}`}
        className="cursor-pointer w-full"
      >
        <p className="text-balance">{data.name}</p>
      </Link>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={selected}
          onChange={selectedHandler}
          className="form-checkbox h-5 w-5 text-sky-600"
        />
      </div>
    </li>
  );
};

export default SearchItem;
