import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EAppRoute, EAuthorizationStatus } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import Main from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import RoomPage from '../../pages/room-page/room-page';
import { TOffer } from '../../types/offer';
import OffersList from '../offers-list/offers-list';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  placesCount: string;
  offers: TOffer[];
};

function App({ placesCount, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={EAppRoute.Main}
          element={<Main placesCount={placesCount} offers={offers}/>}
        />
        <Route path={EAppRoute.Login} element={<LoginPage />} />
        <Route
          path={EAppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={EAuthorizationStatus.Auth}>
              <FavoritesPage offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route path={EAppRoute.Offer}>
          <Route index element={<OffersList offers={offers}/>} />
          <Route path=':id' element={<RoomPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
