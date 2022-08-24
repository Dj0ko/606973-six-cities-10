/* eslint-disable no-console */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import CircularIndeterminate from '../../pages/loading-screen/loading-screen';
import LoginPage from '../../pages/login-page/login-page';
import Main from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import RoomPage from '../../pages/room-page/room-page';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  const { isDataLoaded } = useAppSelector((state) => state);
  console.log(isDataLoaded);

  if (isDataLoaded) {
    return (
      <CircularIndeterminate />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer}>
          <Route path=':id' element={<RoomPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
