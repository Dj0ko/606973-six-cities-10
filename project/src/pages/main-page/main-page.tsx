import { useState } from 'react';
import AppHeader from '../../components/app-header/app-header';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import LocationList from '../../components/location-list/location-list';
import { Point } from '../../types';
import { LOCATIONS } from '../../const';
import { useAppSelector } from '../../hooks/index';
import { getOfferList } from '../../utils/get-offers-list';

function Main(): JSX.Element {
  const { city } = useAppSelector((state) => state);

  const currentLocationOffers = getOfferList(city.title);

  const points = currentLocationOffers.map((offer) => ({
    id: offer.id,
    title: offer.title,
    lat: offer.location.latitude,
    lng: offer.location.longitude
  }));

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const onListItemHover = (listItemName: string) => {
    const currentPoint = points.find((point) => point.id === Number(listItemName));

    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page page--gray page--main">
      <AppHeader />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList locations={LOCATIONS}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentLocationOffers.length} places to stay in {city.title}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={currentLocationOffers} onListItemHover={onListItemHover} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} points={points} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
