import { useContext } from 'react';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import { ThemeContext } from '../../../shared/providers/theme/theme.context';
interface iCharacterItemProps {
  data: iPerson | undefined;
}
export function CharacterItem({ data }: iCharacterItemProps) {
  if (!data) return <p>not data</p>;
  const { theme } = useContext(ThemeContext);
  const dataID = data.url.split('/')[5];
  const icon =
    'https://starwars-visualguide.com/assets/img/characters/' + dataID + '.jpg';
  return (
    <div className="p-4 w-full flex flex-col items-center">
      <div className="mb-4 text-center opacity-90">
        <a href="#" className="relative block">
          <img
            alt="profil"
            src={icon}
            className="mx-auto object-cover rounded-full h-40 w-40 "
          />
        </a>
      </div>
      <div className="text-center">
        <p
          className={
            (theme === 'light' ? ' text-gray-800 ' : ' text-white ') +
            ' text-2xl'
          }
        >
          {data.name}
        </p>
        <p
          className={
            (theme === 'light' ? ' text-gray-800 ' : ' text-gray-200 ') +
            'text-xl font-light'
          }
        >
          {data.gender}
        </p>
        <ul
          className={
            (theme === 'light' ? ' text-gray-800 ' : ' text-gray-400 ') +
            'max-w-xs py-4 font-light text-md flex flex-col items-center'
          }
        >
          <li>Height: {data.height}</li> <li>Mass: {data.mass}</li>
          <li>Hair Color: {data.hair_color}</li>
          <li>Skin Color: {data.skin_color}</li>
          <li>Eye Color: {data.eye_color}</li>
        </ul>
      </div>
    </div>
  );
}
