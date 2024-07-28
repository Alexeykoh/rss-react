import { render } from '@testing-library/react';
import { ThemeContext } from '../../../providers/theme/theme.context';
import { PaginationButton } from '../pagination-btn';

describe('PaginationButton', () => {
  it('renders prev icon when type is prev', () => {
    const { getByTestId } = render(
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        <PaginationButton
          action={() => {
            console.log('object');
          }}
          isDisabled={false}
          isLoading={false}
          type="prev"
        />
      </ThemeContext.Provider>
    );
    expect(getByTestId('pagination-btn-prev-icon')).toBeInTheDocument();
  });

  it('renders next icon when type is next', () => {
    const { getByTestId } = render(
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        <PaginationButton
          action={() => {
            console.log('object');
          }}
          isDisabled={false}
          isLoading={false}
          type="next"
        />
      </ThemeContext.Provider>
    );
    expect(getByTestId('pagination-btn-next-icon')).toBeInTheDocument();
  });
});
