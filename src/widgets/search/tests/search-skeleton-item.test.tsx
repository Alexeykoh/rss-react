import { render, screen } from '@testing-library/react';
import { ThemeContext } from '../../../shared/providers/theme/theme.context';
import SkeletonSearchItem from '../ui/search-skeleton-item';

test('renders a skeleton search item', () => {
  render(<SkeletonSearchItem />);
  const skeletonItem = screen.getByTestId('skeleton-search-item');
  expect(skeletonItem).toBeInTheDocument();
});

test('renders a light skeleton search item when the theme is light', () => {
  render(<SkeletonSearchItem />, {
    wrapper: ({ children }) => (
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  });
  const skeletonItem = screen.getByTestId('skeleton-search-item');
  expect(skeletonItem).toHaveClass('bg-gray-50');
});

test('renders a dark skeleton search item when the theme is dark', () => {
  render(<SkeletonSearchItem />, {
    wrapper: ({ children }) => (
      <ThemeContext.Provider
        value={{
          theme: 'dark',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  });
  const skeletonItem = screen.getByTestId('skeleton-search-item');
  expect(skeletonItem).toHaveClass('bg-gray-200');
});

test('renders the skeleton search item with the correct classNames', () => {
  render(<SkeletonSearchItem />);
  const skeletonItem = screen.getByTestId('skeleton-search-item');
  expect(skeletonItem).toHaveClass(
    'flex flex-row gap-2 rounded-md animate-pulse'
  );
});
