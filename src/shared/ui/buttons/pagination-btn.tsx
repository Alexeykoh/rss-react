import { useContext } from 'react';
import { ThemeContext } from '../../providers/theme/theme.context';

interface iPaginationBar {
  action: () => void;
  isDisabled: boolean;
  isLoading: boolean;
  type: 'prev' | 'next';
}

export function PaginationButton({
  action,
  isDisabled,
  isLoading,
  type
}: iPaginationBar) {
  const { theme } = useContext(ThemeContext);
  return (
    <button disabled={isDisabled} onClick={action}>
      {type === 'prev' ? (
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
          className={
            (isLoading && ' opacity-50 ') +
            (theme === 'light' ? ' text-black ' : ' text-white ') +
            ' duration-150'
          }
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      ) : (
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
          className={
            (isLoading && ' opacity-50 ') +
            (theme === 'light' ? ' text-black ' : ' text-white ') +
            ' duration-150'
          }
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      )}
    </button>
  );
}
