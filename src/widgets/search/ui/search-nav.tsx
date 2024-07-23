import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

interface iSearchNav {
  nextPage: number;
  prevPage: number;
  isLoading: boolean;
}
export function SearchNav({ nextPage, prevPage, isLoading }: iSearchNav) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between">
      <button
        disabled={searchParams.get('page') === '1'}
        onClick={() => {
          if (searchParams.get('page') === '1') return;
          navigate(`/?page=${prevPage}`);
        }}
        className={
          (searchParams.get('page') === '1'
            ? ' text-gray-200/20 cursor-not-allowed '
            : '') +
          (isLoading ? ' text-gray-200/20 ' : ' cursor-pointer ') +
          ' px-4 py-2 '
        }
      >
        prev
      </button>
      <button
        onClick={() => navigate(`/?page=${nextPage}`)}
        className={
          (isLoading ? ' text-gray-200/20 ' : ' cursor-pointer ') +
          'px-4 py-2 cursor-pointer'
        }
      >
        next
      </button>
    </div>
  );
}
