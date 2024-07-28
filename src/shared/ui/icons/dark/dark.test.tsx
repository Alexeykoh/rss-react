import { render, screen } from '@testing-library/react';
import { DarkIcon } from './dark';

describe('DarkIcon', () => {
  it('should render dark theme icon', () => {
    render(<DarkIcon />);
    expect(screen.getByTestId('dark-theme-icon')).toBeInTheDocument();
  });
});
