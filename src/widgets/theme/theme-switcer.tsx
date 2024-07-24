import { useContext } from 'react';
import { ThemeContext } from '../../shared/providers/theme/theme.context';
import { DarkIcon } from '../../shared/ui/icons/dark/dark';
import { LightIcon } from '../../shared/ui/icons/light/light';

export function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div data-testid="theme-switcher" className="flex p-2">
      <input
        data-testid="theme-switch-input"
        className="hidden"
        type="checkbox"
        id="themeSwitch"
        name="theme"
        checked={theme === 'light'}
        onChange={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      />
      <label data-testid="theme-switch-label" htmlFor="themeSwitch">
        {theme === 'light' ? <LightIcon /> : <DarkIcon />}
      </label>
    </div>
  );
}
