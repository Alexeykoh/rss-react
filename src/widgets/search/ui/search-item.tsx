import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';

interface Props {
  data: iPerson;
}

const SearchItem: React.FC<Props> = ({ data }) => {
  const dataID = data.url.split('/')[5];
  const [searchParams] = useSearchParams();

  return (
    <Link to={`/details/?details=${dataID}`} className="cursor-pointer">
      <li
        className={
          (Number(dataID) === Number(searchParams.get('details'))
            ? ' bg-sky-500 '
            : ' bg-slate-600 ') + ' flex flex-col p-2 gap-2 '
        }
      >
        <p className="text-balance">{data.name}</p>
      </li>
    </Link>
  );
};

export default SearchItem;
