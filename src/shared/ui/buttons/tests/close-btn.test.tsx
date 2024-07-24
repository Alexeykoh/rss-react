import { render } from '@testing-library/react';
import { CloseBtn } from '../close-btn';

describe('CloseBtn', () => {
  test('renders CloseIcon', () => {
    const { getByTestId } = render(
      <CloseBtn
        onClick={() => {
          console.log('test click');
        }}
      />
    );
    expect(getByTestId('close-icon-btn')).toBeInTheDocument();
  });
});
