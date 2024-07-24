import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { ThemeContext } from '../shared/providers/theme/theme.context';
import { Flyout } from '../widgets/flyout/flyout';
import { Search } from '../widgets/search/search';

export function Layout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const page = searchParams.get('page');

    setSearchParams(prev => {
      return { ...prev, page: page || 1 };
    });
  }, []);

  return (
    <main
      data-testid="layout"
      className={
        (theme === 'dark' ? ' bg-gray-600 ' : ' bg-gray-100 ') +
        ' text-white flex flex-row h-screen overflow-hidden'
      }
    >
      <section className="flex w-1/3">
        <Search />
      </section>
      <section className="w-2/3 h-full">
        <Outlet />
      </section>
      <Flyout />
    </main>
  );
}
