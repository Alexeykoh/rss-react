import { useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { iPerson } from '../../../shared/interfaces/start-wars.interface';
import { ThemeContext } from '../../../shared/providers/theme/theme.context';
import { ImagePreloader } from '../../../shared/ui/image-preloader/image-preloader';

interface iLastItem {
  data: iPerson;
}
export function LastItem({ data }: iLastItem) {
  const { theme } = useContext(ThemeContext);
  const [searchParams] = useSearchParams();

  const dataID = data.url.split('/')[5];
  const icon =
    'https://starwars-visualguide.com/assets/img/characters/' + dataID + '.jpg';
  return (
    <Link
      data-testid="last-item"
      to={`/details/?page=${searchParams.get('page') || '1'}&details=${dataID}`}
      className={
        (theme === 'light' ? ' text-gray-600 ' : ' text-white ') +
        ' flex flex-col items-center justify-center  mr-4 gap-4 text-black'
      }
    >
      <ImagePreloader
        src={icon}
        alt={data.name + '_alt'}
        classList={'mx-auto object-cover rounded-full h-10 w-10 '}
      />
      <p>{data.name}</p>
    </Link>
  );
}
