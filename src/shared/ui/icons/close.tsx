import { useContext } from 'react';
import { ThemeContext } from '../../providers/theme/theme.context';

export function CloseIcon() {
  const { theme } = useContext(ThemeContext);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={
        (theme === 'light' ? 'text-gray-800' : 'text-white') +
        ' w-8 h-8 hover:scale-105 duration-150'
      }
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
