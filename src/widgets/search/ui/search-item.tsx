import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { RootState } from '../../../app/app.store';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import { ThemeContext } from '../../../shared/providers/theme/theme.context';

interface Props {
  data: iPerson;
}

const SearchItem: React.FC<Props> = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const [searchParams] = useSearchParams();
  const viewedList = useSelector((state: RootState) => state.viewed.list);
  const dispatch = useDispatch();
  const [check, setCheck] = useState<boolean>(
    viewedList.filter(item => item.name === data.name).length > 0
  );
  const dataID = data.url.split('/')[5];
  const icon =
    'https://starwars-visualguide.com/assets/img/characters/' + dataID + '.jpg';

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
          : theme === 'light'
            ? ' bg-white '
            : ' bg-gray-500 ') + ' flex flex-row gap-2 rounded-md'
      }
    >
      <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
        <Link
          className="flex items-center flex-1 "
          to={`/details/?page=${searchParams.get('page') || '1'}&details=${dataID}`}
        >
          <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
            <img
              alt={data.name + '_alt'}
              src={icon}
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </div>
          <div className="flex-1 pl-1 mr-16">
            <div
              className={
                (theme === 'light' ? ' text-gray-600 ' : ' text-white') +
                ' font-medium'
              }
            >
              {data.name}
            </div>
            <div
              className={
                (theme === 'light' ? ' text-gray-600 ' : ' text-white') +
                ' text-sm'
              }
            >
              {data.gender}
            </div>
          </div>
        </Link>
        <label htmlFor={data.name}>
          <input
            onChange={changeHandler}
            type="checkbox"
            name={data.name}
            checked={check}
          />
        </label>
      </div>
    </li>
  );
};

export default SearchItem;
