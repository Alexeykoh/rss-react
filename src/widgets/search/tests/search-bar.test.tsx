import { fireEvent, render, screen } from '@testing-library/react';
import SearchForm from '../ui/search-bar';

describe('SearchForm', () => {
  it('should render search form', () => {
    render(
      <SearchForm
        value=""
        handleInput={() => {
          console.log('object');
        }}
        handleSubmit={() => {
          console.log('object');
        }}
        clearInput={() => {
          console.log('object');
        }}
      />
    );
    expect(screen.getByTestId('search-form')).toBeInTheDocument();
  });

  it('should render search icon', () => {
    render(
      <SearchForm
        value=""
        handleInput={() => {
          console.log('object');
        }}
        handleSubmit={() => {
          console.log('object');
        }}
        clearInput={() => {
          console.log('object');
        }}
      />
    );
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });

  it('should render search input', () => {
    render(
      <SearchForm
        value=""
        handleInput={() => {
          console.log('object');
        }}
        handleSubmit={() => {
          console.log('object');
        }}
        clearInput={() => {
          console.log('object');
        }}
      />
    );
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });

  it('should render search submit button', () => {
    render(
      <SearchForm
        value=""
        handleInput={() => {
          console.log('object');
        }}
        handleSubmit={() => {
          console.log('object');
        }}
        clearInput={() => {
          console.log('object');
        }}
      />
    );
    expect(screen.getByTestId('search-submit-button')).toBeInTheDocument();
  });

  it('should update search input value', () => {
    render(
      <SearchForm
        value="Luke Skywalker"
        handleInput={() => {
          return 'Luke Skywalker';
        }}
        handleSubmit={() => {
          console.log('object');
        }}
        clearInput={() => {
          console.log('object');
        }}
      />
    );
    expect(screen.getByTestId('search-form')).toBeInTheDocument();
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'Luke Skywalker' } });
    expect(input).toHaveValue('Luke Skywalker');
  });
});
