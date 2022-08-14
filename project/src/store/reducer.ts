import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types';
import { changeCity, setOffers } from './action';

const initialState = {
  city:  {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13
  },
  offers: [] as Offer[]
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
    });
});

export {reducer};
