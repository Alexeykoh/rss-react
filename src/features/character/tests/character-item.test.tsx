import { render, screen } from '@testing-library/react';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import { ThemeContext } from '../../../shared/providers/theme/theme.context';
import { CharacterItem } from '../ui/character-item';

const character: iPerson = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  gender: 'male',
  url: 'https://swapi.dev/api/people/1/',
  birth_year: '19BB',
  homeworld: 'Tatooine',
  films: [
    'Episode IV: A New Hope',
    'Episode V: The Empire Strikes Back',
    'Episode VI: Return of the Jedi'
  ],
  species: ['Human'],
  vehicles: ['X-Wing', 'Millennium Falcon'],
  starships: ['Millennium Falcon'],
  created: '2014-12-20T10:39:37+00:00',
  edited: '2017-09-25T17:38:15+00:00'
};

describe('CharacterItem', () => {
  it('should render character item', () => {
    render(
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        <CharacterItem data={character} />
      </ThemeContext.Provider>
    );
    expect(screen.getByTestId('character-item')).toBeInTheDocument();
  });

  it('should render character item with correct data', () => {
    render(
      <ThemeContext.Provider
        value={{
          theme: 'light',
          setTheme: () => {
            console.log('object');
          }
        }}
      >
        <CharacterItem data={character} />
      </ThemeContext.Provider>
    );
    expect(screen.getByTestId('character-item-name')).toHaveTextContent(
      character.name
    );
    expect(screen.getByTestId('character-item-gender')).toHaveTextContent(
      character.gender
    );
    expect(screen.getByTestId('character-item-height')).toHaveTextContent(
      `Height: ${character.height}`
    );
    expect(screen.getByTestId('character-item-mass')).toHaveTextContent(
      `Mass: ${character.mass}`
    );
    expect(screen.getByTestId('character-item-hair')).toHaveTextContent(
      `Hair Color: ${character.hair_color}`
    );
    expect(screen.getByTestId('character-item-skin')).toHaveTextContent(
      `Skin Color: ${character.skin_color}`
    );
    expect(screen.getByTestId('character-item-eye')).toHaveTextContent(
      `Eye Color: ${character.eye_color}`
    );
  });
});
