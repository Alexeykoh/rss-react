import { CharacterItemSkeleton } from './ui/skeleton-character-item';

interface iCharacterProps {
  children: React.ReactNode;
  isLoading: boolean;
  isError: string;
}
export function Character({ children, isLoading, isError }: iCharacterProps) {
  if (isLoading) {
    return <CharacterItemSkeleton />;
  }
  if (isError) {
    return <p>{isError}</p>;
  }
  return <>{children}</>;
}
