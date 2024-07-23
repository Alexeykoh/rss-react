import Loader from '../../shared/ui/icons/loader';

interface iCharacterProps {
  children: React.ReactNode;
  isLoading: boolean;
  isError: string;
}
export function Character({ children, isLoading, isError }: iCharacterProps) {
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>{isError}</p>;
  }
  return <>{children}</>;
}
