import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { RootState } from '../../../app/app.store';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';

interface Props {
  data: iPerson;
}

const SearchItem: React.FC<Props> = ({ data }) => {
  const [searchParams] = useSearchParams();
  const viewedList = useSelector((state: RootState) => state.viewed.list);
  const dispatch = useDispatch();
  const [check, setCheck] = useState<boolean>(
    viewedList.filter(item => item.name === data.name).length > 0
  );
  const dataID = data.url.split('/')[5];

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      dispatch({ type: 'viewed/addItem', payload: data });
      setCheck(true);
    } else {
      dispatch({ type: 'viewed/removeItem', payload: data });
      setCheck(false);
    }
  }

  return (
    <li
      className={
        (Number(dataID) === Number(searchParams.get('details'))
          ? ' bg-sky-500 '
          : ' bg-slate-600 ') + ' flex flex-col p-2 gap-2 '
      }
    >
      <Link
        to={`/details/?page=${searchParams.get('page') || '1'}&details=${dataID}`}
        className="cursor-pointer"
      >
        <p className="text-balance">{data.name}</p>
      </Link>

      <label htmlFor={data.name}>
        <input
          onChange={changeHandler}
          type="checkbox"
          name={data.name}
          checked={check}
        />
      </label>
    </li>
  );
};

export default SearchItem;
