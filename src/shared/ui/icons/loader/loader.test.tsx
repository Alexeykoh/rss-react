import { render, screen } from '@testing-library/react';
import { ThemeContext } from '../../../providers/theme/theme.context';
import Loader from './loader';

describe('Loader', () => {
  it('should render loader with light theme', () => {
    render(
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme() {
            console.log('object');
          }
        }}
      >
        <Loader />
      </ThemeContext.Provider>
    );
    expect(screen.getByTestId('loader-spin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('loader-spin-icon')).toHaveClass('text-black');
    expect(screen.getByTestId('loader-spin-icon')).toHaveClass('animate-spin');
  });

  it('should render loader with dark theme', () => {
    render(
      <ThemeContext.Provider
        value={{
          theme: 'dark',
          setTheme() {
            console.log('object');
          }
        }}
      >
        <Loader />
      </ThemeContext.Provider>
    );
    expect(screen.getByTestId('loader-spin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('loader-spin-icon')).toHaveClass('text-white');
    expect(screen.getByTestId('loader-spin-icon')).toHaveClass('animate-spin');
  });
});
