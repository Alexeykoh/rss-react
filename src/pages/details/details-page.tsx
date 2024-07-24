import { useNavigate, useSearchParams } from 'react-router-dom';
import { Character } from '../../features/character/character';
import { CharacterItem } from '../../features/character/ui/character-item';
import { useGetCharacterByIDQuery } from '../../shared/services/star-wars.service';
import { CloseBtn } from '../../shared/ui/buttons/close-btn';

export default function DetailsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data, isLoading, isFetching, error } = useGetCharacterByIDQuery(
    Number(searchParams.get('details')) || 1
  );

  return (
    <section className="flex flex-col">
      <CloseBtn onClick={() => navigate('/')} />
      <Character
        isLoading={isLoading || isFetching}
        isError={error ? 'error' : ''}
      >
        <CharacterItem data={data} />
      </Character>
    </section>
  );
}
