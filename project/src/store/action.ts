import {createAction} from '@reduxjs/toolkit';
import { City, Offer, Offers, Reviews } from '../types';
import { AuthorizationStatus, AppRoute } from '../const';

export const changeCity = createAction<{location: City}>('hotels/changeCity');

export const setOffers = createAction<{offers: Offers}>('hotels/setOffers');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const loadCurrentOffer = createAction<Offer>('offer/loadCurrentOffer');

export const loadCurrentOfferReviews = createAction<Reviews>('offer/loadCurrentOfferReviews');

export const loadCurrentOfferNearby = createAction<Offers>('offer/loadCurrentOfferNearby');

export const sendComment = createAction<string>('offer/sendComment');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('data/setError');

export const redirectToRoute = createAction<AppRoute>('hotels/redirectToRoute');
