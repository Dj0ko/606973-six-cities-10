import {createAction} from '@reduxjs/toolkit';
import { City, Offer } from '../types';

export const changeCity = createAction<{location: City}>('changeCity');

export const setOffers = createAction<{offers: Offer[]}>('setOffers');
