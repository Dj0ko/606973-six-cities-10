import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EAppRoute, EAuthorizationStatus } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import Main from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import RoomPage from '../../pages/room-page/room-page';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  placesCount: string;
};

function App({ placesCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={EAppRoute.Main}
          element={<Main placesCount={placesCount} />}
        />
        <Route path={EAppRoute.Login} element={<LoginPage />} />
        <Route
          path={EAppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={EAuthorizationStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={EAppRoute.Offer}>
          <Route path=':id' element={<RoomPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
