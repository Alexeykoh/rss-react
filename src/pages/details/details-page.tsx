import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Character } from '../../features/character/character';
import { CharacterItem } from '../../features/character/ui/character-item';
import { useGetCharacterByIDMutation } from '../../shared/services/star-wars.service';
import { CloseBtn } from '../../shared/ui/buttons/close-btn';

export default function DetailsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [getCharacter, { data, isLoading, error }] =
    useGetCharacterByIDMutation();

  useEffect(() => {
    getCharacter(Number(searchParams.get('details')) || 1);
  }, [searchParams]);

  return (
    <section>
      <CloseBtn onClick={() => navigate('/')} />
      <Character isLoading={isLoading} isError={error ? 'error' : ''}>
        <CharacterItem data={data} />;
      </Character>
    </section>
  );
}
