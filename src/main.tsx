import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './app/index.css';
import ErrorBoundary from './shared/error-boundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
