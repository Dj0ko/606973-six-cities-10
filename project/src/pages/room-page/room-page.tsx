import { useParams } from 'react-router-dom';
import AppHeader from '../../components/app-header/app-header';
import ReviewsList from '../../components/reviews-list/reviews-list';

import Map from '../../components/map/map';
import { useEffect, useState } from 'react';
import { Point } from '../../types';
import OffersList from '../../components/offers-list/offers-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCurrentOfferAction, fetchCurrentOfferNearbyAction, fetchCurrentOfferReviewsAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

function RoomPage(): JSX.Element {
  const { currentOffer, currentOfferNearby } = useAppSelector((state) => state);
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(fetchCurrentOfferAction(params.id));
      dispatch(fetchCurrentOfferNearbyAction(params.id));
      dispatch(fetchCurrentOfferReviewsAction(params.id));
    }
  }, [dispatch, params.id]);

  const { city } = useAppSelector((state) => state);
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(undefined);

  if (!currentOffer) {
    return <LoadingScreen />;
  }

  const points = currentOfferNearby.map((offer) => ({
    id: offer.id,
    title: offer.title,
    lat: offer.location.latitude,
    lng: offer.location.longitude
  }));


  const onListItemHover = (listItemName: string) => {
    const currentPoint = points.find((point) => point.id === Number(listItemName));

    setSelectedPoint(currentPoint);
  };


  const { images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods,
    host: { avatarUrl, isPro, name }, description } = currentOffer;

  return (
    <div className="page">
      <AppHeader />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, i) => {
                if (i < 6) {
                  return (
                    <div className="property__image-wrapper" key={image}>
                      <img className="property__image" src={image} alt="studio view" />
                    </div>
                  );}
                return '';
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>) : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((property) => (
                    <li className="property__inside-item" key={property}>
                      {property}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro ? (
                    <span className="property__user-status">
                      Pro
                    </span>) : null}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={city} points={points} selectedPoint={selectedPoint} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={currentOfferNearby} onListItemHover={onListItemHover}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomPage;
