import {createAction} from '@reduxjs/toolkit';
import { City, Offers } from '../types';
import { AuthorizationStatus, AppRoute } from '../const';

export const changeCity = createAction<{location: City}>('hotels/changeCity');

export const setOffers = createAction<{offers: Offers}>('hotels/setOffers');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('game/setError');

export const redirectToRoute = createAction<AppRoute>('hotels/redirectToRoute');
