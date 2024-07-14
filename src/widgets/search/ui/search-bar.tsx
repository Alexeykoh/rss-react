import { CloseIcon } from '../../../shared/ui/icons/close';
import { SearchIcon } from '../../../shared/ui/icons/search';

type SearchFormProps = {
  value: string;
  handleInput: (value: string) => void;
  handleSubmit: () => void;
  clearInput: () => void;
};

const SearchForm = ({
  value,
  handleInput,
  handleSubmit,
  clearInput
}: SearchFormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-row justify-center duration-150 bg-gray-950 py-2 px-4 gap-2"
    >
      <button
        onClick={e => {
          e.preventDefault();
          clearInput();
        }}
        type="button"
      >
        <CloseIcon />
      </button>

      <input
        placeholder={value}
        className="placeholder:text-white/50 bg-transparent flex w-full focus:outline-none hover:outline-none active:outline-none"
        onInput={e => {
          handleInput((e.target as HTMLInputElement).value);
        }}
        type="text"
        value={value}
      />

      <button
        onClick={e => {
          e.preventDefault();
          handleSubmit();
        }}
        type="button"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchForm;
