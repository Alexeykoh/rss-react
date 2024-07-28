import { Link } from 'react-router-dom';

export function Page404() {
  return (
    <section data-testid="page-404">
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </section>
  );
}
