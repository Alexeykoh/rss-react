import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/app.store';
import exportData from '../../features/export-data/export-data';
import { ThemeContext } from '../../shared/providers/theme/theme.context';

export function Flyout() {
  const dispatch = useDispatch();
  const viewedList = useSelector((state: RootState) => state.viewed.list);
  const { theme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(viewedList.length > 0);
  }, [viewedList]);

  function clearAllHandler() {
    dispatch({ type: 'viewed/clearAll' });
  }

  return (
    <div
      className={
        (theme === 'light'
          ? ' bg-sky-200 text-black '
          : ' bg-sky-700 text-white ') +
        (isActive ? ' translate-y-0 ' : ' translate-y-32 ') +
        ' fixed bottom-5 right-5 flex px-6 py-3 rounded-md flex-row gap-4 duration-150'
      }
    >
      <button onClick={clearAllHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
      </button>
      <button
        className="clear-all-btn relative"
        onClick={() => {
          exportData(viewedList);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="export-btn animate-bounce"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M12 18v-6" />
          <path d="m9 15 3 3 3-3" />
        </svg>
        <span
          className={
            (theme === 'light'
              ? ' bg-sky-300 text-black '
              : ' bg-gray-700 text-white ') +
            'absolute text-xs top-3 -right-5 p-1 rounded-full  w-8 h-8 flex items-center justify-center'
          }
        >
          {viewedList.length}
        </span>
      </button>
    </div>
  );
}
