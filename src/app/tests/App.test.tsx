import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { store } from '../app.store';

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('renders main page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  it('renders details page', () => {
    render(
      <MemoryRouter initialEntries={['/details']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId('details-page')).toBeInTheDocument();
  });

  it('renders 404 page', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-404')).toBeInTheDocument();
  });
});
