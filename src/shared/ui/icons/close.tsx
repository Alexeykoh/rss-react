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
        (theme === 'light' ? 'text-gray-800' : 'text-white') + ' w-12 h-12'
      }
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
