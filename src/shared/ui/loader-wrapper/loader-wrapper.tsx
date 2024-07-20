import Loader from '../icons/loader';
interface iLoaderWrapper {
  error: boolean;
  isLoading: boolean;
  children: React.ReactNode;
}
export function LoaderWrapper({ children, error, isLoading }: iLoaderWrapper) {
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }

  return children;
}
