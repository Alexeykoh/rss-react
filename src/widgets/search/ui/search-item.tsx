import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { RootState } from '../../../app/app.store';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import { ThemeContext } from '../../../shared/providers/theme/theme.context';
import { ImagePreloader } from '../../../shared/ui/image-preloader/image-preloader';

interface Props {
  data: iPerson;
}

const SearchItem: React.FC<Props> = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const [searchParams] = useSearchParams();
  const viewedList = useSelector((state: RootState) => state.viewed.list);
  const dispatch = useDispatch();
  const dataID = data.url.split('/')[5];
  const icon =
    'https://starwars-visualguide.com/assets/img/characters/' + dataID + '.jpg';

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      dispatch({ type: 'viewed/addItem', payload: data });
    } else {
      dispatch({ type: 'viewed/removeItem', payload: data });
    }
  }

  function checkHandler() {
    if (viewedList.find(item => item.name === data.name)) {
      return true;
    }
    return false;
  }

  return (
    <li
      data-testid="search-item"
      className={
        (theme === 'light' ? ' bg-white ' : ' bg-gray-500 ') +
        (Number(dataID) === Number(searchParams.get('details'))
          ? ' border-sky-400 '
          : 'border-transparent') +
        ' flex flex-row gap-2 rounded-md border-solid border-2 hover:translate-x-2 duration-150 '
      }
    >
      <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
        <Link
          data-testid="search-item-link"
          className="flex items-center flex-1 "
          to={`/details/?page=${searchParams.get('page') || '1'}&details=${dataID}`}
        >
          <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
            <ImagePreloader
              src={icon}
              alt={data.name + '_alt'}
              classList={'mx-auto object-cover rounded-full h-10 w-10 '}
            />
          </div>
          <div className="flex-1 pl-1 mr-16">
            <div
              data-testid="search-item-name"
              className={
                (theme === 'light' ? ' text-gray-600 ' : ' text-white') +
                ' font-medium'
              }
            >
              {data.name}
            </div>
            <div
              data-testid="search-item-gender"
              className={
                (theme === 'light' ? ' text-gray-600 ' : ' text-white') +
                ' text-sm'
              }
            >
              {data.gender}
            </div>
          </div>
        </Link>
        <label data-testid="search-item-checkbox" htmlFor={data.name}>
          <input
            data-testid="search-item-checkbox-input"
            onChange={changeHandler}
            type="checkbox"
            name={data.name}
            checked={checkHandler()}
            className="w-5 h-5"
          />
        </label>
      </div>
    </li>
  );
};

export default SearchItem;
