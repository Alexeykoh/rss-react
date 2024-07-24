import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ThemeContext } from '../../shared/providers/theme/theme.context';
import { PaginationButton } from '../../shared/ui/buttons/pagination-btn';

interface iPaginationBar {
  onNext: () => void;
  onPrev: () => void;
  currentPage: number;
  isLoading: boolean;
}
export function PaginationBar({
  onNext,
  onPrev,
  currentPage,
  isLoading
}: iPaginationBar) {
  const [searchParams] = useSearchParams();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full flex items-center justify-center gap-4 p-2">
      <PaginationButton
        action={onPrev}
        isDisabled={searchParams.get('page') === '1'}
        isLoading={isLoading}
        type={'prev'}
      />
      <p className={theme === 'light' ? ' text-black ' : ' text-white '}>
        {currentPage}
      </p>
      <PaginationButton
        action={onNext}
        isDisabled={false}
        isLoading={isLoading}
        type={'next'}
      />
    </div>
  );
}
