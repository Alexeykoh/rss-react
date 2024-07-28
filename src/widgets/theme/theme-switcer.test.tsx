import { render, screen } from '@testing-library/react';
import { ThemeContext } from '../../shared/providers/theme/theme.context';
import { ThemeSwitcher } from './theme-switcer';

describe('ThemeSwitcher', () => {
  it('should render light theme icon', () => {
    render(
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            return 'light';
          }
        }}
      >
        <ThemeSwitcher />
      </ThemeContext.Provider>
    );
    expect(screen.getByTestId('theme-switch-label').firstChild).toEqual(
      screen.getByTestId('light-theme-icon')
    );
  });

  it('should render dark theme icon', () => {
    render(
      <ThemeContext.Provider
        value={{
          theme: 'dark',
          setTheme: () => {
            return 'light';
          }
        }}
      >
        <ThemeSwitcher />
      </ThemeContext.Provider>
    );
    expect(screen.getByTestId('theme-switch-label').firstChild).toEqual(
      screen.getByTestId('dark-theme-icon')
    );
  });
});
