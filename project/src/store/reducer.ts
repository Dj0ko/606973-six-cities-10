import { createReducer } from '@reduxjs/toolkit';
import { offers, CITY } from '../mocks';
import { changeCity, setOffers } from './action';

const initialState = {
  city: CITY,
  offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(setOffers, (state, action) => {
      const { offersList } = action.payload;
      state.offers = offersList;
    });
});

export {reducer};
