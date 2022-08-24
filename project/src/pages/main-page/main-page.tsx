import { useEffect, useState } from 'react';
import AppHeader from '../../components/app-header/app-header';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import LocationList from '../../components/location-list/location-list';
import { Offers, Point, Tab } from '../../types';
import { Tabs, tabs } from '../../const';
import { useAppSelector } from '../../hooks/index';
import { getOfferList } from '../../utils';
import PlacesSorting from '../../components/places-sorting/places-sorting';

function Main(): JSX.Element {
  const { city, offers } = useAppSelector((state) => state);
  const { title } = city;
  const [ popular ] = tabs;

  const [ currentLocationOffers, setCurrentLocationOffers ] = useState<Offers>([]);
  const [ sortedList, setSortedList ] = useState<Offers>([]);
  const [ currentTab, setCurrentTab ] = useState(popular);

  useEffect(() => {
    setCurrentLocationOffers(getOfferList(offers, title));
  }, [offers, title]);

  useEffect(() => {
    const copiedList = [...currentLocationOffers];
    switch (currentTab.id) {
      case Tabs.PriceLowToHigh:
        setSortedList(copiedList.sort((a,b) => a.price - b.price));
        break;
      case Tabs.PriceHighToLow:
        setSortedList(copiedList.sort((a,b) => b.price - a.price));
        break;
      case Tabs.TopRatedFirst:
        setSortedList(copiedList.sort((a,b) => b.rating - a.rating));
        break;
      default:
        setSortedList([]);
        break;
    }
  }, [currentLocationOffers, currentTab.id]);

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

  const handleSwitchTab = (tab: Tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="page page--gray page--main">
      <AppHeader />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentLocationOffers.length} places to stay in {city.title}</b>
              <PlacesSorting handleSwitchTab={handleSwitchTab} currentTab={currentTab}/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={sortedList.length ? sortedList : currentLocationOffers} onListItemHover={onListItemHover} />
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
