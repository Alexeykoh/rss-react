import { useContext } from 'react';
import { ThemeContext } from '../../../shared/providers/theme/theme.context';

type SearchFormProps = {
  value: string;
  handleInput: (value: string) => void;
  handleSubmit: () => void;
  clearInput: () => void;
};

const SearchForm = ({ value, handleInput, handleSubmit }: SearchFormProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
      className="w-full mx-auto"
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className={
              (theme === 'dark' ? 'text-gray-400' : 'text-gray-500') +
              ' w-4 h-4 '
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onInput={e => {
            handleInput((e.target as HTMLInputElement).value);
          }}
          value={value}
          type="search"
          id="default-search"
          className={
            (theme === 'dark'
              ? ' bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 '
              : ' bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-900 border border-gray-300') +
            'block w-full p-4 ps-10 text-sm  rounded-lg  '
          }
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          onClick={e => {
            e.preventDefault();
            handleSubmit();
          }}
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
