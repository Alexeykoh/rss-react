// useStorage.test.tsx
import { renderHook } from '@testing-library/react';
import { useStorage } from '../useStorage';

beforeEach(() => {
  localStorage.clear();
});

describe('useStorage', () => {
  it('should initialize with data from localStorage', () => {
    localStorage.setItem('testKey', JSON.stringify({ foo: 'bar' }));
    const { result } = renderHook(() => useStorage<{ foo: string }>('testKey'));

    expect(result.current.store).toEqual({ foo: 'bar' });
  });

  it('should handle null initial state if no data in localStorage', () => {
    const { result } = renderHook(() => useStorage<{ foo: string }>('testKey'));

    expect(result.current.store).toBeNull();
  });
});
