import { render, screen } from '@testing-library/react';
import { ThemeContext } from '../../../providers/theme/theme.context';
import { CloseIcon } from './close';

describe('CloseIcon', () => {
  it('should render close icon with correct color as light theme', () => {
    render(
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme() {
            console.log('test');
          }
        }}
      >
        <CloseIcon />
      </ThemeContext.Provider>
    );
    expect(screen.getByTestId('close-icon')).toHaveClass('text-gray-800');
  });

  it('should render close icon with correct color as dark theme', () => {
    render(
      <ThemeContext.Provider
        value={{
          theme: 'dark',
          setTheme() {
            console.log('test');
          }
        }}
      >
        <CloseIcon />
      </ThemeContext.Provider>
    );
    expect(screen.getByTestId('close-icon')).toHaveClass('text-white');
  });

  it('should render close icon with correct size', () => {
    render(<CloseIcon />);
    expect(screen.getByTestId('close-icon')).toHaveClass('w-8 h-8');
  });

  it('should render close icon with correct hover effect', () => {
    render(<CloseIcon />);
    expect(screen.getByTestId('close-icon')).toHaveClass(
      'hover:scale-105 duration-150'
    );
  });
});
