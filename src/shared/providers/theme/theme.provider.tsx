import { createContext, ReactNode, useContext, useState } from 'react';
import { themeType, IThemeContext, ThemeContext } from './theme.context';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<themeType>('light');
  const ThemeContext = createContext<IThemeContext>({
    theme: 'light',
    setTheme: () => {
      return;
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
