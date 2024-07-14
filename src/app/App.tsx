import { Route, Routes } from 'react-router';
import { Page404 } from '../pages/404';
import DetailsPage from '../pages/details/details-page';
import { Layout } from '../pages/layout';
import MainPage from '../pages/main/main-page';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/details/" element={<DetailsPage />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  </Routes>
);

export default App;
