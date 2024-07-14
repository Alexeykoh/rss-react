import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { Search } from '../widgets/search/search';

export function Layout() {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const page = searchParams.get('page');

    setSearchParams(prev => {
      return { ...prev, page: page || 1 };
    });
  }, []);

  return (
    <main className="bg-slate-900 text-white flex flex-row items-center h-screen overflow-hidden">
      <Search />
      <section className="w-1/3 bg-slate-900 h-full">
        <Outlet />
      </section>
    </main>
  );
}
