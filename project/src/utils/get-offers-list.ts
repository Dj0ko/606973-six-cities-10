import { Offers } from '../types';

export const getOfferList = (offers: Offers, city: string): Offers => offers.filter((offer) => offer.city.name === city);
