import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeContext } from '../../shared/providers/theme/theme.context';
import { PaginationBar } from './pagination-bar';

test('renders prev btn when current page is not 1', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        <PaginationBar
          onNext={() => {
            console.log('object');
          }}
          onPrev={() => {
            console.log('object');
          }}
          currentPage={2}
          isLoading={false}
        />
      </ThemeContext.Provider>
    </MemoryRouter>
  );
  expect(getByTestId('pagination-prev-btn')).toBeInTheDocument();
});

test('renders next btn when current page is not 1', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        <PaginationBar
          onNext={() => {
            console.log('object');
          }}
          onPrev={() => {
            console.log('object');
          }}
          currentPage={2}
          isLoading={false}
        />
      </ThemeContext.Provider>
    </MemoryRouter>
  );
  expect(getByTestId('pagination-next-btn')).toBeInTheDocument();
});

test('renders current page correctly', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        <PaginationBar
          onNext={() => {
            console.log('object');
          }}
          onPrev={() => {
            console.log('object');
          }}
          currentPage={2}
          isLoading={false}
        />
      </ThemeContext.Provider>
    </MemoryRouter>
  );
  expect(getByTestId('pagination-bar-current-page').textContent).toBe('2');
});

test('disables prev btn when current page is 1', () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={['/?page=1']}>
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        <PaginationBar
          onNext={() => {
            console.log('object');
          }}
          onPrev={() => {
            console.log('object');
          }}
          currentPage={1}
          isLoading={false}
        />
      </ThemeContext.Provider>
    </MemoryRouter>
  );
  expect(getByTestId('pagination-prev-btn')).toHaveAttribute('disabled');
});
