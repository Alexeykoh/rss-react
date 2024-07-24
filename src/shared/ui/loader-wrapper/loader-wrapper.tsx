import SkeletonSearchItem from '../../../widgets/search/ui/search-skeleton-item';

interface iLoaderWrapper {
  error: boolean;
  isLoading: boolean;
  children: React.ReactNode;
}
export function LoaderWrapper({ children, error, isLoading }: iLoaderWrapper) {
  if (isLoading) {
    return Array(10)
      .fill('skeleton-data')
      .map((el, index) => <SkeletonSearchItem key={el + index} />);
  }
  if (error) {
    return <p>Something went wrong</p>;
  }

  return children;
}
