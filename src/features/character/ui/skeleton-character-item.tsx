import { useContext } from 'react';
import { ThemeContext } from '../../../shared/providers/theme/theme.context';
import Loader from '../../../shared/ui/icons/loader';

export function CharacterItemSkeleton() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="p-4 w-full flex flex-col items-center animate-pulse">
      <div className="mb-4 text-center opacity-90">
        <span className="flex rounded-full h-40 w-40 bg-gray-400 ">
          <Loader />
        </span>
      </div>
      <div className="text-center">
        <p
          className={
            (theme === 'light' ? ' text-gray-800 ' : ' text-white ') +
            ' text-2xl'
          }
        >
          <span className="text-transparent bg-gray-400 rounded-md">
            {'skeleton-data'}
          </span>
        </p>
        <p
          className={
            (theme === 'light' ? ' text-gray-800 ' : ' text-gray-200 ') +
            'text-xl font-light'
          }
        >
          <span className="text-transparent bg-gray-400 rounded-md">
            {'skeleton-data'}
          </span>
        </p>
      </div>
    </div>
  );
}
