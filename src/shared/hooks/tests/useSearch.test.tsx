import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useSearch } from '../useSearch';

test('should return searchValue', () => {
  const { result } = renderHook(() => useSearch());
  expect(result.current.searchValue).toBe('');
});

test('should set searchValue', () => {
  const { result } = renderHook(() => useSearch());
  act(() => {
    result.current.setSearchValue('test');
  });
  expect(result.current.searchValue).toBe('test');
});

test('should set searchValue to localStorage', () => {
  const { result } = renderHook(() => useSearch());
  act(() => {
    result.current.setSearchValue('test');
  });
  expect(localStorage.getItem('searchHistory')).toBe('test');
});

test('should update searchValue when localStorage change', () => {
  localStorage.setItem('searchHistory', 'test');
  const { result } = renderHook(() => useSearch());
  expect(result.current.searchValue).toBe('test');
});
