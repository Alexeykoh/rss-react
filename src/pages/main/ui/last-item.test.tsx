// LastItem.test.tsx
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { vi } from 'vitest';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import { ThemeContext } from '../../../shared/providers/theme/theme.context';
import { LastItem } from './last-item';

// Mocking the useSearchParams hook
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useSearchParams: () => [{ get: () => '1' }]
  };
});

const mockPerson: iPerson = {
  name: 'Luke Skywalker',
  url: 'https://swapi.dev/api/people/1/',
  // Other iPerson properties...
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: '',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: '',
  edited: ''
};

const renderWithRouter = (ui: React.ReactElement) => {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

describe('LastItem', () => {
  it('should render with light theme', () => {
    const { getByTestId, getByText } = renderWithRouter(
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        <LastItem data={mockPerson} />
      </ThemeContext.Provider>
    );

    const linkElement = getByTestId('last-item');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass('text-gray-600');
    expect(getByText('Luke Skywalker')).toBeInTheDocument();
  });

  it('should render with dark theme', () => {
    const { getByTestId } = renderWithRouter(
      <ThemeContext.Provider
        value={{
          theme: 'dark',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        <LastItem data={mockPerson} />
      </ThemeContext.Provider>
    );

    const linkElement = getByTestId('last-item');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass('text-white');
  });

  it('should have the correct link', () => {
    const { getByTestId } = renderWithRouter(
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        <LastItem data={mockPerson} />
      </ThemeContext.Provider>
    );

    const linkElement = getByTestId('last-item');

    expect(linkElement).toHaveAttribute('href', '/details/?page=1&details=1');
  });
});
