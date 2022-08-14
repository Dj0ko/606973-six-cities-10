import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks';
import { changeCity, setOffers } from './action';

const initialState = {
  city:  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { location } = action.payload;
      state.city = location;
    })
    .addCase(setOffers, (state, action) => {
      const { offersList } = action.payload;
      state.offers = offersList;
    });
});

export {reducer};
