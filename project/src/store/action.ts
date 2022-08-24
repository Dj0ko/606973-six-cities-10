import {createAction} from '@reduxjs/toolkit';
import { City, Offers } from '../types';

export const changeCity = createAction<{location: City}>('changeCity');

export const setOffers = createAction<{offers: Offers}>('setOffers');

export const loadOffers = createAction<Offers>('loadOffers');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
