import React, { useContext } from 'react';
import { ThemeContext } from '../../../shared/providers/theme/theme.context';

const SkeletonSearchItem: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <li
      data-testid="skeleton-search-item"
      className={
        (theme === 'light' ? ' bg-gray-50 ' : ' bg-gray-200') +
        ' flex flex-row gap-2 rounded-md animate-pulse'
      }
    >
      <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
        <div className="flex items-center flex-1 ">
          <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
            <span className="mx-auto object-cover rounded-full h-10 w-10 bg-gray-400"></span>
          </div>
          <div className="flex-1 pl-1 mr-16 space-y-1">
            <div
              className={' font-medium text-transparent rounded-md bg-gray-400'}
            >
              {'skeleton-data'}
            </div>
            <div className={' text-sm text-transparent rounded-md bg-gray-400'}>
              {'skeleton-data'}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SkeletonSearchItem;
