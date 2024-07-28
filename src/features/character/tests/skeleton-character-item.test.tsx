import { render, screen } from '@testing-library/react';
import { CharacterItemSkeleton } from '../ui/skeleton-character-item';

test('render skeleton character item', () => {
  render(<CharacterItemSkeleton />);
  expect(screen.getByTestId('character-item-skeleton')).toBeInTheDocument();
  expect(
    screen.getByTestId('character-item-skeleton-name')
  ).toBeInTheDocument();
  expect(
    screen.getByTestId('character-item-skeleton-gender')
  ).toBeInTheDocument();
});
