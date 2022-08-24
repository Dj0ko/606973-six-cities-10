import { createReducer } from '@reduxjs/toolkit';
import { City, Offers } from '../types';
import { changeCity, setOffers, loadOffers, setDataLoadedStatus } from './action';

type InitialState = {
  city: City,
  offers: Offers,
  isDataLoaded: boolean
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
  isDataLoaded: false
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
    });
});

export {reducer};
