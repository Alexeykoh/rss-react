import { render, screen } from '@testing-library/react';
import { LightIcon } from './light';

describe('DarkIcon', () => {
  it('should render light theme icon', () => {
    render(<LightIcon />);
    expect(screen.getByTestId('light-theme-icon')).toBeInTheDocument();
  });
});
