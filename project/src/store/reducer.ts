import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { City, Offer, Offers, Reviews } from '../types';
import { changeCity, setOffers, loadOffers, setDataLoadedStatus, requireAuthorization, setError, loadCurrentOffer, loadCurrentOfferNearby, loadCurrentOfferReviews } from './action';

type InitialState = {
  city: City,
  offers: Offers,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus
  error: string | null,
  currentOffer: Offer | null,
  currentOfferNearby: Offers,
  reviews: Reviews
}

const initialState: InitialState = {
  city:  {
    id: 1,
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13
  },
  offers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  currentOffer: null,
  currentOfferNearby: [],
  reviews: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { location } = action.payload;
      state.city = location;
    })
    .addCase(setOffers, (state, action) => {
      const { offers } = action.payload;
      state.offers = offers;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadCurrentOfferNearby, (state, action) => {
      state.currentOfferNearby = action.payload;
    })
    .addCase(loadCurrentOfferReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export {reducer};
