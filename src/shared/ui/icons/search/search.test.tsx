import { render, screen } from '@testing-library/react';
import { SearchIcon } from './search';

describe('SearchIcon', () => {
  it('should render search icon', () => {
    render(<SearchIcon />);
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });

  it('should render correct icon size', () => {
    render(<SearchIcon />);
    expect(screen.getByTestId('search-icon')).toHaveAttribute('width', '24');
    expect(screen.getByTestId('search-icon')).toHaveAttribute('height', '24');
  });
});
