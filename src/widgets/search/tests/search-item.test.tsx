import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { store } from '../../../app/app.store';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import SearchItem from '../ui/search-item';

const fakeData: iPerson = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/6/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/7/'
  ],
  species: ['https://swapi.dev/api/species/1/'],
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/'
  ],
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/'
  ],
  url: 'https://swapi.dev/api/people/1/',
  created: '',
  edited: ''
};

const renderSearchItem = (data: iPerson) => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <SearchItem data={data} />
      </MemoryRouter>
    </Provider>
  );
};

describe('SearchItem', () => {
  it('should render name', () => {
    renderSearchItem(fakeData);
    expect(screen.getByTestId('search-item-name').textContent).toBe(
      fakeData.name
    );
  });

  it('should render gender', () => {
    renderSearchItem(fakeData);
    expect(screen.getByTestId('search-item-gender').textContent).toBe(
      fakeData.gender
    );
  });

  it('should render link to details', () => {
    renderSearchItem(fakeData);
    expect(screen.getByTestId('search-item-link').getAttribute('href')).toBe(
      '/details/?page=1&details=1'
    );
  });

  it('should render checkbox', () => {
    renderSearchItem(fakeData);
    expect(screen.getByTestId('search-item-checkbox')).toBeInTheDocument();
  });
});
